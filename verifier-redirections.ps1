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
    @("/blog-2/", "/ressources-ia/"),
    @("/blog-2/page/2/", "/ressources-ia/"),
    @("/formation/", "https://test.aurelienmizeret.com/"),
    @("/ressources/", "/ressources-ia/"),
    @("/lingenierie-humaine-au-service-de-votre-collectif/", "/ingenierie-de-gouvernance/"),
    @("/executive-sparring-le-miroir-strategique-du-dirigeant/", "/executive-confidant/"),
    @("/test-des-schemas-young/", "https://test.aurelienmizeret.com/test-schemas-young/"),
    @("/barometre-observatoire-ia-impact-terrain/", "/observatoire-ia/"),
    @("/ia-comex-diagnostic/", "/cadrage-de-decision-ia/"),
    @("/ia-et-management/", "/diagnostic/"),
    @("/author/aurelien-mizeret/", "/a-propos/"),
    @("/author/admin7217/", "/a-propos/"),
    @("/audit-de-transition-ia/", "/diagnostic-de-robustesse-ia/"),
    @("/category/ia/", "/ressources-ia/"),
    @("/tag/ia/", "/ressources-ia/"),
    @("/sitemap_index.xml", "/sitemap.xml"),
    @("/page-sitemap.xml", "/sitemap.xml"),
    @("/post-sitemap.xml", "/sitemap.xml")
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
    "/", "/contact/", "/observatoire-ia/", "/faq/", "/ingenierie-de-gouvernance/", "/diagnostic/",
    "/cadrage-de-decision-ia/", "/diagnostic-de-robustesse-ia/", "/a-propos/", "/executive-confidant/", "/ressources-ia/",
    "/notre-plus-grand-risque-nest-pas-que-lia-se-trompe-entretien-avec-cecile-carydis-drh-de-dynamips/",
    "/ia-risque-extinction-vrai-danger/",
    "/il-fallait-rassurer-sur-le-sens-avant-de-convaincre-par-la-productivite-entretien-avec-iona-journou/",
    "/observatoire-ia-entretien-avec-meganne-sitalapresad-risf/",
    "/identite-numerique-la-vraie-question-nest-pas-pour-ou-contre/",
    "/une-valeur-ajoutee-evidente-ne-suffit-pas-a-creer-ladoption-ce-quun-drh-hospitalier-a-appris-en-se-trompant/",
    "/observatoire-ia-entretien-avec-ilham-mouhriz-sothema/",
    "/ia-nous-navons-pas-encadre-lusage-assez-vite/",
    "/choisir-outil-ia-methode/",
    "/nous-naurons-pas-ete-remplaces-nous-nous-serons-absentes/",
    "/mesurer-les-gains-de-productivite-de-lia-le-test-en-5-indicateurs/",
    "/ia-et-productivite-en-entreprise-ce-que-font-les-5-qui-reussissent/",
    "/se-reconvertir-a-cause-de-lia-la-strategie-qui-tient/",
    "/quels-metiers-vont-disparaitre-avec-lia-la-carte-2026/",
    "/lia-ne-vous-remplacera-pas-ce-que-vous-lui-deleguez-si/",
    "/lia-va-t-elle-remplacer-les-humains-et-votre-travail/",
    "/ce-que-lia-fait-de-nous-le-livre-qui-pose-enfin-les-bonnes-questions/",
    "/la-fin-du-junior-lia-absorbe-les-taches-qui-formaient/",
    "/ia-et-productivite-le-gain-de-temps-qui-narrive-jamais/",
    "/shadow-ai-ce-que-vos-equipes-utilisent-sans-vous-le-dire/",
    "/ia-et-travail-la-redistribution-que-personne-na-vue/",
    "/ce-que-lusage-de-lia-dit-de-nous/",
    "/roi-de-lia-en-entreprise/",
    "/retention-des-talents-et-ia-act-sortir-du-far-west-algorithmique/",
    "/ai-act-regulation-innovation-marque-employeur/",
    "/sens-du-travail-et-ia/",
    "/seniorisation-et-ia-eviter-le-piege-de-la-dequalification-rh/",
    "/taylorisme-numerique-ia/",
    "/impact-ia-sur-lemploi-rh/",
    "/ethique-ia/",
    "/exemple-charte-ia-entreprise-de-la-conformite-ia-act-aux-rh/"
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
