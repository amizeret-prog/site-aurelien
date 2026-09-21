# verifier-redirections.ps1
# Controle des redirections de l'ancien site.
# Usage : powershell -ExecutionPolicy Bypass -File .\verifier-redirections.ps1 -Base "https://xxxx.netlify.app"
param([string]$Base = "")

if ($Base -eq "") { $Base = Read-Host "Adresse du site a tester (ex. https://xxxx.netlify.app)" }
$Base = $Base.TrimEnd("/")
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$hostBase = ([Uri]$Base).Host

function Get-Status($url, $follow) {
    try {
        $req = [System.Net.HttpWebRequest]::Create($url)
        $req.AllowAutoRedirect = $follow
        $req.Method = "GET"
        $req.UserAgent = "verif-redirections"
        $req.Timeout = 20000
        $resp = $req.GetResponse()
        $code = [int]$resp.StatusCode
        $loc = $resp.Headers["Location"]
        $resp.Close()
        return @($code, $loc)
    } catch [System.Net.WebException] {
        if ($_.Exception.Response) {
            $r = $_.Exception.Response
            $code = [int]$r.StatusCode
            $loc = $r.Headers["Location"]
            $r.Close()
            return @($code, $loc)
        }
        return @(0, "")
    }
}

function Norm($u) {
    if (-not $u) { return "" }
    if ($u -match "^https?://") {
        $uri = [Uri]$u
        if ($uri.Host -eq $hostBase) { $u = $uri.PathAndQuery }
    }
    return $u.TrimEnd("/")
}

$problemes = @()

# 1. Redirections attendues : source -> cible
$redirections = @(
    @("/blog-2/", "/analyses/"),
    @("/ressources/", "/analyses/"),
    @("/ressources-ia/", "/analyses/"),
    @("/formation/", "https://test.aurelienmizeret.com/"),
    @("/test-des-schemas-young/", "https://test.aurelienmizeret.com/test-schemas-young/"),
    @("/lingenierie-humaine-au-service-de-votre-collectif/", "/offres/programme-gouvernance-humaine/"),
    @("/ingenierie-de-gouvernance/", "/offres/programme-gouvernance-humaine/"),
    @("/executive-sparring-le-miroir-strategique-du-dirigeant/", "/offres/executive-confidant/"),
    @("/executive-confidant/", "/offres/executive-confidant/"),
    @("/ia-comex-diagnostic/", "/offres/cadrage-decision-ia/"),
    @("/cadrage-de-decision-ia/", "/offres/cadrage-decision-ia/"),
    @("/audit-de-transition-ia/", "/offres/audit-transition-ia/"),
    @("/diagnostic-de-robustesse-ia/", "/diagnostic/"),
    @("/ia-et-management/", "/diagnostic/"),
    @("/observatoire-ia/", "/entretiens/"),
    @("/barometre-observatoire-ia-impact-terrain/", "/entretiens/"),
    @("/faq/", "/offres/"),
    @("/author/aurelien-mizeret/", "/a-propos/"),
    @("/author/admin7217/", "/a-propos/"),
    @("/une-valeur-ajoutee-evidente-ne-suffit-pas-a-creer-ladoption-ce-quun-drh-hospitalier-a-appris-en-se-trompant/", "/entretiens/adoption-ia-hopital/"),
    @("/observatoire-ia-entretien-avec-ilham-mouhriz-sothema/", "/entretiens/qui-porte-ia-entreprise-sothema/"),
    @("/ia-nous-navons-pas-encadre-lusage-assez-vite/", "/entretiens/encadrer-usage-ia-entreprise/"),
    @("/notre-plus-grand-risque-nest-pas-que-lia-se-trompe-entretien-avec-cecile-carydis-drh-de-dynamips/", "/entretiens/"),
    @("/il-fallait-rassurer-sur-le-sens-avant-de-convaincre-par-la-productivite-entretien-avec-iona-journou/", "/entretiens/"),
    @("/observatoire-ia-entretien-avec-meganne-sitalapresad-risf/", "/entretiens/"),
    @("/ce-que-lia-fait-de-nous-le-livre-qui-pose-enfin-les-bonnes-questions/", "/livre/"),
    @("/ia-risque-extinction-vrai-danger/", "/analyses/"),
    @("/identite-numerique-la-vraie-question-nest-pas-pour-ou-contre/", "/analyses/"),
    @("/choisir-outil-ia-methode/", "/analyses/"),
    @("/nous-naurons-pas-ete-remplaces-nous-nous-serons-absentes/", "/analyses/"),
    @("/mesurer-les-gains-de-productivite-de-lia-le-test-en-5-indicateurs/", "/analyses/"),
    @("/ia-et-productivite-en-entreprise-ce-que-font-les-5-qui-reussissent/", "/analyses/"),
    @("/se-reconvertir-a-cause-de-lia-la-strategie-qui-tient/", "/analyses/"),
    @("/quels-metiers-vont-disparaitre-avec-lia-la-carte-2026/", "/analyses/"),
    @("/lia-ne-vous-remplacera-pas-ce-que-vous-lui-deleguez-si/", "/analyses/"),
    @("/lia-va-t-elle-remplacer-les-humains-et-votre-travail/", "/analyses/"),
    @("/la-fin-du-junior-lia-absorbe-les-taches-qui-formaient/", "/analyses/"),
    @("/ia-et-productivite-le-gain-de-temps-qui-narrive-jamais/", "/analyses/"),
    @("/shadow-ai-ce-que-vos-equipes-utilisent-sans-vous-le-dire/", "/analyses/"),
    @("/ia-et-travail-la-redistribution-que-personne-na-vue/", "/analyses/"),
    @("/ce-que-lusage-de-lia-dit-de-nous/", "/analyses/"),
    @("/roi-de-lia-en-entreprise/", "/analyses/"),
    @("/retention-des-talents-et-ia-act-sortir-du-far-west-algorithmique/", "/analyses/"),
    @("/ai-act-regulation-innovation-marque-employeur/", "/analyses/"),
    @("/sens-du-travail-et-ia/", "/analyses/"),
    @("/seniorisation-et-ia-eviter-le-piege-de-la-dequalification-rh/", "/analyses/"),
    @("/taylorisme-numerique-ia/", "/analyses/"),
    @("/impact-ia-sur-lemploi-rh/", "/analyses/"),
    @("/ethique-ia/", "/analyses/"),
    @("/exemple-charte-ia-entreprise-de-la-conformite-ia-act-aux-rh/", "/analyses/"),
    @("/blog-2/page/2/", "/analyses/"),
    @("/category/ia/", "/analyses/"),
    @("/tag/ia/", "/analyses/"),
    @("/sitemap_index.xml", "/sitemap-index.xml"),
    @("/page-sitemap.xml", "/sitemap-index.xml"),
    @("/post-sitemap.xml", "/sitemap-index.xml")
)

Write-Host "`n=== 1. Redirections ==="
foreach ($r in $redirections) {
    $res = Get-Status ($Base + $r[0]) $false
    $ok = ($res[0] -eq 301) -and ((Norm $res[1]) -eq (Norm $r[1]))
    if ($ok) { Write-Host "OK   $($r[0])" }
    else {
        $msg = "REDIRECTION KO : $($r[0]) -> code $($res[0]), Location '$($res[1])' (attendu 301 vers $($r[1]))"
        Write-Host $msg; $problemes += $msg
    }
}

# 2. Cibles des redirections : doivent repondre 200
$cibles = $redirections | ForEach-Object { $_[1] } | Select-Object -Unique
Write-Host "`n=== 2. Cibles ==="
foreach ($c in $cibles) {
    $url = if ($c -match "^https?://") { $c } else { $Base + $c }
    $res = Get-Status $url $true
    if ($res[0] -eq 200) { Write-Host "OK   $c" }
    else { $msg = "CIBLE A CORRIGER : $c -> code $($res[0])"; Write-Host $msg; $problemes += $msg }
}

# 3. Pages conservees a l'identique : doivent repondre 200
$gardees = @(
    "/",
    "/contact/",
    "/diagnostic/",
    "/a-propos/",
    "/livre/",
    "/analyses/",
    "/entretiens/",
    "/offres/"
)
Write-Host "`n=== 3. Pages conservees ==="
foreach ($g in $gardees) {
    $res = Get-Status ($Base + $g) $false
    if ($res[0] -eq 200) { Write-Host "OK   $g" }
    else { $msg = "PAGE ABSENTE : $g -> code $($res[0])"; Write-Host $msg; $problemes += $msg }
}

# 4. Points d'entree WordPress : doivent repondre 410 ou 404
Write-Host "`n=== 4. Adresses WordPress fermees ==="
foreach ($p in @("/feed/", "/wp-admin/", "/wp-login.php", "/xmlrpc.php")) {
    $res = Get-Status ($Base + $p) $false
    if ($res[0] -eq 410 -or $res[0] -eq 404) { Write-Host "OK   $p ($($res[0]))" }
    else { $msg = "FERMETURE KO : $p -> code $($res[0])"; Write-Host $msg; $problemes += $msg }
}

Write-Host "`n=== BILAN ($Base) ==="
if ($problemes.Count -eq 0) { Write-Host "Tout est OK." }
else {
    Write-Host "$($problemes.Count) point(s) a corriger :"
    $problemes | ForEach-Object { Write-Host " - $_" }
}
