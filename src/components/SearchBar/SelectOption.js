import React from 'react';
import Select from 'react-select';
import './SearchBar.css';
const options = [
  {
    "value": "AAAP",
    "label": "AAAP - Advanced Accele. Ads"
  },
  {
    "value": "AAL",
    "label": "AAL - American Airlines Gp"
  },
  {
    "value": "AAME",
    "label": "AAME - Atlantic Amer Cp"
  },
  {
    "value": "AAOI",
    "label": "AAOI - Applied Optoelect Cmn"
  },
  {
    "value": "AAON",
    "label": "AAON - Aaon Inc"
  },
  {
    "value": "AAPC",
    "label": "AAPC - Atlantic Alliance Or"
  },
  {
    "value": "AAPL",
    "label": "AAPL - Apple Inc"
  },
  {
    "value": "AAWW",
    "label": "AAWW - Atlas Air Ww"
  },
  {
    "value": "AAXJ",
    "label": "AAXJ - Ishares MSCI Aca X-Japan"
  },
  {
    "value": "AAXN",
    "label": "AAXN - Axon Inc"
  },
  {
    "value": "ABAC",
    "label": "ABAC - Aoxin Tianli Grp"
  },
  {
    "value": "ABAX",
    "label": "ABAX - Abaxis Inc"
  },
  {
    "value": "ABCB",
    "label": "ABCB - Ameris Bancorp"
  },
  {
    "value": "ABCD",
    "label": "ABCD - Cambium Learning Grp"
  },
  {
    "value": "ABCO",
    "label": "ABCO - Advisory Board Co"
  },
  {
    "value": "ABDC",
    "label": "ABDC - Alcentra Capital Com"
  },
  {
    "value": "ABEO",
    "label": "ABEO - Abeona Therapeutics"
  },
  {
    "value": "ABEOW",
    "label": "ABEOW - Abeona Thera Wts"
  },
  {
    "value": "ABIL",
    "label": "ABIL - Ability Inc"
  },
  {
    "value": "ABIO",
    "label": "ABIO - Arca Biopharma Inc"
  },
  {
    "value": "ABMD",
    "label": "ABMD - Abiomed Inc"
  },
  {
    "value": "ABTL",
    "label": "ABTL - Autobytel Inc"
  },
  {
    "value": "ABTX",
    "label": "ABTX - Allegiance Banc CS"
  },
  {
    "value": "ABUS",
    "label": "ABUS - Arbutus Biopharma Cp"
  },
  {
    "value": "ABY",
    "label": "ABY - Atlantica Yield Plc"
  },
  {
    "value": "ACAD",
    "label": "ACAD - Acadia Pharmaceutica"
  },
  {
    "value": "ACBI",
    "label": "ACBI - Atlantic Capital Cmn"
  },
  {
    "value": "ACET",
    "label": "ACET - Aceto Cp"
  },
  {
    "value": "ACFC",
    "label": "ACFC - Atlantic Coast Finl"
  },
  {
    "value": "ACGL",
    "label": "ACGL - Arch Capital Grp Ltd"
  },
  {
    "value": "ACGLP",
    "label": "ACGLP - Arch Capital Group Ltd"
  },
  {
    "value": "ACHC",
    "label": "ACHC - Acadia Healthcr Co"
  },
  {
    "value": "ACHN",
    "label": "ACHN - Achillion Pharmaceut"
  },
  {
    "value": "ACIA",
    "label": "ACIA - Acacia Communica Cmn"
  },
  {
    "value": "ACIU",
    "label": "ACIU - AC Immune Sa"
  },
  {
    "value": "ACIW",
    "label": "ACIW - Aci Worldwide Inc"
  },
  {
    "value": "ACLS",
    "label": "ACLS - Axcelis Tech Inc"
  },
  {
    "value": "ACNB",
    "label": "ACNB - Acnb Corp"
  },
  {
    "value": "ACOR",
    "label": "ACOR - Acorda Therapeutics"
  },
  {
    "value": "ACRS",
    "label": "ACRS - Aclaris Therapts Cmn"
  },
  {
    "value": "ACRX",
    "label": "ACRX - Acelrx Pharmaceutica"
  },
  {
    "value": "ACSF",
    "label": "ACSF - American Capital Sen"
  },
  {
    "value": "ACST",
    "label": "ACST - Acasti Pharma Cmn A"
  },
  {
    "value": "ACTA",
    "label": "ACTA - Actua Corp Cmn"
  },
  {
    "value": "ACTG",
    "label": "ACTG - Acacia Res-Acacia"
  },
  {
    "value": "ACTX",
    "label": "ACTX - Glbl X Guru Actv ETF"
  },
  {
    "value": "ACWI",
    "label": "ACWI - Ishares MSCI ACWI"
  },
  {
    "value": "ACWX",
    "label": "ACWX - Ishares MSCI ACWI"
  },
  {
    "value": "ACXM",
    "label": "ACXM - Acxiom Cp"
  },
  {
    "value": "ADAP",
    "label": "ADAP - Adaptimmune Ther Ads"
  },
  {
    "value": "ADBE",
    "label": "ADBE - Adobe Systems Inc"
  },
  {
    "value": "ADES",
    "label": "ADES - Advanced Emissions Solutions Inc"
  },
  {
    "value": "ADHD",
    "label": "ADHD - Alcobra Ltd. Ord"
  },
  {
    "value": "ADI",
    "label": "ADI - Analog Devices Cmn"
  },
  {
    "value": "ADMA",
    "label": "ADMA - Adma Biologics Cmn"
  },
  {
    "value": "ADMP",
    "label": "ADMP - Adamis Pharmaceuticl"
  },
  {
    "value": "ADMS",
    "label": "ADMS - Adamas Pharma Cmn"
  },
  {
    "value": "ADP",
    "label": "ADP - Automatic Data Procs"
  },
  {
    "value": "ADRA",
    "label": "ADRA - Bldrs Asia 50 Fd"
  },
  {
    "value": "ADRD",
    "label": "ADRD - Bldrs Dev Mkts 100"
  },
  {
    "value": "ADRE",
    "label": "ADRE - Bldrs EM Mkts 50"
  },
  {
    "value": "ADRO",
    "label": "ADRO - Aduro Biotech Cmn"
  },
  {
    "value": "ADRU",
    "label": "ADRU - Bldrs EUR 100 Fd"
  },
  {
    "value": "ADSK",
    "label": "ADSK - Autodesk Inc"
  },
  {
    "value": "ADTN",
    "label": "ADTN - Adtran Inc"
  },
  {
    "value": "ADUS",
    "label": "ADUS - Addus Homecare Corpo"
  },
  {
    "value": "ADVM",
    "label": "ADVM - Adverum Biotechnlgs"
  },
  {
    "value": "ADXS",
    "label": "ADXS - Advaxis Inc Cmn Stk"
  },
  {
    "value": "ADXSW",
    "label": "ADXSW - Advaxis Inc Wts"
  },
  {
    "value": "AEGN",
    "label": "AEGN - Aegion Corp Cmn Stk"
  },
  {
    "value": "AEHR",
    "label": "AEHR - Aehr Test Systems"
  },
  {
    "value": "AEIS",
    "label": "AEIS - Advanced Energy"
  },
  {
    "value": "AEMD",
    "label": "AEMD - Aethlon Medical Cmn"
  },
  {
    "value": "AERI",
    "label": "AERI - Aerie Pharmaceutical"
  },
  {
    "value": "AETI",
    "label": "AETI - American Electric Te"
  },
  {
    "value": "AEY",
    "label": "AEY - Addvantage Techs Grp"
  },
  {
    "value": "AEZS",
    "label": "AEZS - Aeterna Zentaris"
  },
  {
    "value": "AFAM",
    "label": "AFAM - Almost Family Inc"
  },
  {
    "value": "AFH",
    "label": "AFH - Atlas Fincl Hld Ord"
  },
  {
    "value": "AFMD",
    "label": "AFMD - Affimed N.V."
  },
  {
    "value": "AFSI",
    "label": "AFSI - Amtrust Financial"
  },
  {
    "value": "AGEN",
    "label": "AGEN - Agenus Inc"
  },
  {
    "value": "AGFS",
    "label": "AGFS - Agrofresh Solutions"
  },
  {
    "value": "AGFSW",
    "label": "AGFSW - Agrofresh Sol Wrrnts"
  },
  {
    "value": "AGII",
    "label": "AGII - Argo Group Intl Hlds"
  },
  {
    "value": "AGIIL",
    "label": "AGIIL - Argo Grp Itl Snr NTS"
  },
  {
    "value": "AGIO",
    "label": "AGIO - Agios Pharmaceutical"
  },
  {
    "value": "AGLE",
    "label": "AGLE - Aeglea Biothera Cmn"
  },
  {
    "value": "AGNC",
    "label": "AGNC - American Capital Age"
  },
  {
    "value": "AGNCB",
    "label": "AGNCB - American Cap Agy Cor"
  },
  {
    "value": "AGNCP",
    "label": "AGNCP - American Capital Pfd"
  },
  {
    "value": "AGND",
    "label": "AGND - Wt Brclys Usagg Ndur"
  },
  {
    "value": "AGRX",
    "label": "AGRX - Agile Therap Cmn Stk"
  },
  {
    "value": "AGTC",
    "label": "AGTC - Applied Genetic Tech"
  },
  {
    "value": "AGYS",
    "label": "AGYS - Agilysys Inc"
  },
  {
    "value": "AGZD",
    "label": "AGZD - Wt Barc Usagg Zro Dr"
  },
  {
    "value": "AHGP",
    "label": "AHGP - Alliance Holdings Gp"
  },
  {
    "value": "AHPA",
    "label": "AHPA - Avista Healthcare Public Acquisition Corp. Class"
  },
  {
    "value": "AHPAU",
    "label": "AHPAU - Avista Healthcare Public Acquisition Corp"
  },
  {
    "value": "AHPAW",
    "label": "AHPAW - Avista Healthcare Public Acquisition Corp. Warra"
  },
  {
    "value": "AHPI",
    "label": "AHPI - Allied Healthcare"
  },
  {
    "value": "AIA",
    "label": "AIA - Ishares Asia 50 ETF"
  },
  {
    "value": "AIMC",
    "label": "AIMC - Altra Indtl Mtn Cmn"
  },
  {
    "value": "AIMT",
    "label": "AIMT - Aimmune Therap Cmn"
  },
  {
    "value": "AINV",
    "label": "AINV - Apollo Investment Co"
  },
  {
    "value": "AIQ",
    "label": "AIQ - Alliance Hlthcare Cmn"
  },
  {
    "value": "AIRG",
    "label": "AIRG - Airgain Inc"
  },
  {
    "value": "AIRM",
    "label": "AIRM - Air Methods Cp"
  },
  {
    "value": "AIRR",
    "label": "AIRR - First Trust Rba Am I"
  },
  {
    "value": "AIRT",
    "label": "AIRT - Air T Inc"
  },
  {
    "value": "AKAM",
    "label": "AKAM - Akamai Technologies"
  },
  {
    "value": "AKAO",
    "label": "AKAO - Achaogen Inc Cmn"
  },
  {
    "value": "AKBA",
    "label": "AKBA - Akebia Therapeutics"
  },
  {
    "value": "AKER",
    "label": "AKER - Akers Biosciences Cmn"
  },
  {
    "value": "AKRX",
    "label": "AKRX - Akorn Inc"
  },
  {
    "value": "AKTS",
    "label": "AKTS - Akoustis Technologies Inc"
  },
  {
    "value": "AKTX",
    "label": "AKTX - Akari Therapeutics"
  },
  {
    "value": "ALBO",
    "label": "ALBO - Albireo Pharma Inc"
  },
  {
    "value": "ALCO",
    "label": "ALCO - Alico Inc"
  },
  {
    "value": "ALDR",
    "label": "ALDR - Alder Biopharma Cmn"
  },
  {
    "value": "ALDX",
    "label": "ALDX - Aldeyra Therapeu Cmn"
  },
  {
    "value": "ALGN",
    "label": "ALGN - Align Technology I"
  },
  {
    "value": "ALGT",
    "label": "ALGT - Allegiant Travel Com"
  },
  {
    "value": "ALIM",
    "label": "ALIM - Alimera Sciences Inc"
  },
  {
    "value": "ALJJ",
    "label": "ALJJ - Alj Regional Hold Cmn"
  },
  {
    "value": "ALKS",
    "label": "ALKS - Alkermes Plc"
  },
  {
    "value": "ALLT",
    "label": "ALLT - Allot Communications"
  },
  {
    "value": "ALNY",
    "label": "ALNY - Alnylam Pharmaceut"
  },
  {
    "value": "ALOG",
    "label": "ALOG - Analogic Cp"
  },
  {
    "value": "ALOT",
    "label": "ALOT - Astronova Inc"
  },
  {
    "value": "ALQA",
    "label": "ALQA - Alliqua Biomedical"
  },
  {
    "value": "ALRM",
    "label": "ALRM - Alarm.Com Cmn"
  },
  {
    "value": "ALSK",
    "label": "ALSK - Alaska Commun Sys"
  },
  {
    "value": "ALTY",
    "label": "ALTY - Global X Sprdv ETF"
  },
  {
    "value": "ALXN",
    "label": "ALXN - Alexion Pharm Inc"
  },
  {
    "value": "AMAG",
    "label": "AMAG - Amag Pharmaceuticals"
  },
  {
    "value": "AMAT",
    "label": "AMAT - Applied Materials"
  },
  {
    "value": "AMBA",
    "label": "AMBA - Ambarella Inc"
  },
  {
    "value": "AMBC",
    "label": "AMBC - Ambac Financial Grp"
  },
  {
    "value": "AMBCW",
    "label": "AMBCW - Ambac Financial Grp"
  },
  {
    "value": "AMCN",
    "label": "AMCN - Airmedia Group Inc"
  },
  {
    "value": "AMCX",
    "label": "AMCX - Amc Networks Cl A"
  },
  {
    "value": "AMD",
    "label": "AMD - Adv Micro Devices"
  },
  {
    "value": "AMDA",
    "label": "AMDA - Amedica Corporation"
  },
  {
    "value": "AMED",
    "label": "AMED - Amedisys Inc"
  },
  {
    "value": "AMGN",
    "label": "AMGN - Amgen"
  },
  {
    "value": "AMKR",
    "label": "AMKR - Amkor Technology"
  },
  {
    "value": "AMMA",
    "label": "AMMA - Alliance Mma Inc"
  },
  {
    "value": "AMNB",
    "label": "AMNB - American Natl Bksh"
  },
  {
    "value": "AMOT",
    "label": "AMOT - Allied Motion Tech"
  },
  {
    "value": "AMPH",
    "label": "AMPH - Amphastar Pharma Cmn"
  },
  {
    "value": "AMRB",
    "label": "AMRB - American River Bkshs"
  },
  {
    "value": "AMRI",
    "label": "AMRI - Albany Molecular Res"
  },
  {
    "value": "AMRK",
    "label": "AMRK - A-Mark Precious Meta"
  },
  {
    "value": "AMRN",
    "label": "AMRN - Amarin Corp Ads"
  },
  {
    "value": "AMRS",
    "label": "AMRS - Amyris Inc"
  },
  {
    "value": "AMSC",
    "label": "AMSC - Amer Superconductor"
  },
  {
    "value": "AMSF",
    "label": "AMSF - Amerisafe Inc"
  },
  {
    "value": "AMSWA",
    "label": "AMSWA - Amer Software Inc"
  },
  {
    "value": "AMTD",
    "label": "AMTD - TD Ameritrade HD Cmn"
  },
  {
    "value": "AMTX",
    "label": "AMTX - Aemetis Inc Cmn Stk"
  },
  {
    "value": "AMWD",
    "label": "AMWD - Amer Woodmark Cp"
  },
  {
    "value": "AMZN",
    "label": "AMZN - Amazon.Com Inc"
  },
  {
    "value": "ANAB",
    "label": "ANAB - Anaptysbio Inc"
  },
  {
    "value": "ANAT",
    "label": "ANAT - Amer Natl Insurance"
  },
  {
    "value": "ANCB",
    "label": "ANCB - Anchor Bancorp"
  },
  {
    "value": "ANCX",
    "label": "ANCX - Access National Corp"
  },
  {
    "value": "ANDA",
    "label": "ANDA - Andina Acq Cp Ord Sh"
  },
  {
    "value": "ANDAR",
    "label": "ANDAR - Andina Acq Cp Rt"
  },
  {
    "value": "ANDAU",
    "label": "ANDAU - Andina Acq Cp Unit"
  },
  {
    "value": "ANDAW",
    "label": "ANDAW - Andina Acq Cp Wt"
  },
  {
    "value": "ANDE",
    "label": "ANDE - Andersons Inc"
  },
  {
    "value": "ANGI",
    "label": "ANGI - Angie's List Inc"
  },
  {
    "value": "ANGO",
    "label": "ANGO - Angiodynamics Inc"
  },
  {
    "value": "ANIK",
    "label": "ANIK - Anika Therapeutics"
  },
  {
    "value": "ANIP",
    "label": "ANIP - ANI  Pharma Inc"
  },
  {
    "value": "ANSS",
    "label": "ANSS - Ansys Inc"
  },
  {
    "value": "ANTH",
    "label": "ANTH - Anthera Pharmaceutic"
  },
  {
    "value": "ANY",
    "label": "ANY - Sphere 3D Corp"
  },
  {
    "value": "AOBC",
    "label": "AOBC - American Outdoor Brands Corp"
  },
  {
    "value": "AOSL",
    "label": "AOSL - Alpha and Omega Semi"
  },
  {
    "value": "APDN",
    "label": "APDN - Applied Dna Scns Cmn"
  },
  {
    "value": "APDNW",
    "label": "APDNW - Applied Dna Sci Wrnt"
  },
  {
    "value": "APEI",
    "label": "APEI - American Pub. Edu."
  },
  {
    "value": "APEN",
    "label": "APEN - Apollo Endosurgery Inc"
  },
  {
    "value": "APLP",
    "label": "APLP - Archrock Partners LP"
  },
  {
    "value": "APOG",
    "label": "APOG - Apogee Entrpr Inc"
  },
  {
    "value": "APOP",
    "label": "APOP - Cellect Biotechnology Ltd"
  },
  {
    "value": "APOPW",
    "label": "APOPW - Cellect Biotechnology Ltd"
  },
  {
    "value": "APPF",
    "label": "APPF - Appfolio Cl A Cmn"
  },
  {
    "value": "APPS",
    "label": "APPS - Digital Turbine Cmn"
  },
  {
    "value": "APRI",
    "label": "APRI - Apricus Biosc Inc"
  },
  {
    "value": "APTI",
    "label": "APTI - Apptio Inc"
  },
  {
    "value": "APTO",
    "label": "APTO - Aptose Bioscns Cmn"
  },
  {
    "value": "APVO",
    "label": "APVO - Aptevo Therapeutics Inc"
  },
  {
    "value": "APWC",
    "label": "APWC - Asia Pac Wire &Cable"
  },
  {
    "value": "AQB",
    "label": "AQB - Aquabounty Technologies Inc"
  },
  {
    "value": "AQMS",
    "label": "AQMS - Aqua Metals Inc Cmn"
  },
  {
    "value": "AQXP",
    "label": "AQXP - Aquinox Pharmaceutic"
  },
  {
    "value": "ARAY",
    "label": "ARAY - Accuray Incorporated"
  },
  {
    "value": "ARCB",
    "label": "ARCB - Arcbest Corp"
  },
  {
    "value": "ARCC",
    "label": "ARCC - Ares Capital Corp"
  },
  {
    "value": "ARCI",
    "label": "ARCI - Applnc Rcycl Ct Amer"
  },
  {
    "value": "ARCW",
    "label": "ARCW - Arc Group Worldwide"
  },
  {
    "value": "ARDM",
    "label": "ARDM - Aradigm Corp Cmn"
  },
  {
    "value": "ARDX",
    "label": "ARDX - Ardelyx Inc Cmn"
  },
  {
    "value": "AREX",
    "label": "AREX - Approach Res. Inc"
  },
  {
    "value": "ARGS",
    "label": "ARGS - Argos Therapeutics"
  },
  {
    "value": "ARII",
    "label": "ARII - American Railcar Ind"
  },
  {
    "value": "ARIS",
    "label": "ARIS - Ari Network Svcs"
  },
  {
    "value": "ARKR",
    "label": "ARKR - Ark Restaurants Cp"
  },
  {
    "value": "ARLP",
    "label": "ARLP - Alliance Resource Pt"
  },
  {
    "value": "ARLZ",
    "label": "ARLZ - Aralez Pharm Inc"
  },
  {
    "value": "ARNA",
    "label": "ARNA - Arena Pharmaceutical"
  },
  {
    "value": "AROW",
    "label": "AROW - Arrow Financial Corp"
  },
  {
    "value": "ARQL",
    "label": "ARQL - Arqule Inc"
  },
  {
    "value": "ARRS",
    "label": "ARRS - Arris Group Inc"
  },
  {
    "value": "ARRY",
    "label": "ARRY - Array Biopharma Inc"
  },
  {
    "value": "ARTNA",
    "label": "ARTNA - Artesian Res Cp A"
  },
  {
    "value": "ARTW",
    "label": "ARTW - Art S Way MFG Co I"
  },
  {
    "value": "ARTX",
    "label": "ARTX - Arotech Corp"
  },
  {
    "value": "ARWR",
    "label": "ARWR - Arrowhead Pharma"
  },
  {
    "value": "ASBB",
    "label": "ASBB - Asb Bancorp Inc"
  },
  {
    "value": "ASCMA",
    "label": "ASCMA - Ascent Capital Group"
  },
  {
    "value": "ASET",
    "label": "ASET - Flxsh Rl As Al Ix Fd"
  },
  {
    "value": "ASFI",
    "label": "ASFI - Asta Funding Inc"
  },
  {
    "value": "ASMB",
    "label": "ASMB - Assembly Biosciences"
  },
  {
    "value": "ASML",
    "label": "ASML - Asml Hldg NY Reg"
  },
  {
    "value": "ASNA",
    "label": "ASNA - Ascena Retail Grp Cmn"
  },
  {
    "value": "ASND",
    "label": "ASND - Ascendis Pharma Ads"
  },
  {
    "value": "ASPS",
    "label": "ASPS - Altisource Portfolio"
  },
  {
    "value": "ASRV",
    "label": "ASRV - Ameriserv Financial"
  },
  {
    "value": "ASRVP",
    "label": "ASRVP - Ameriserv Fin Cap"
  },
  {
    "value": "ASTC",
    "label": "ASTC - Astrotech Corp"
  },
  {
    "value": "ASTE",
    "label": "ASTE - Astec Inds Inc"
  },
  {
    "value": "ASUR",
    "label": "ASUR - Asure Software"
  },
  {
    "value": "ASYS",
    "label": "ASYS - Amtech Systems Inc"
  },
  {
    "value": "ATAI",
    "label": "ATAI - Ata Inc ADR"
  },
  {
    "value": "ATAX",
    "label": "ATAX - Amer First Mf Inv"
  },
  {
    "value": "ATEC",
    "label": "ATEC - Alphatec Holdings"
  },
  {
    "value": "ATHN",
    "label": "ATHN - Athenahealth Inc"
  },
  {
    "value": "ATHX",
    "label": "ATHX - Athersys Inc"
  },
  {
    "value": "ATLC",
    "label": "ATLC - Atlanticus Hldg Cp"
  },
  {
    "value": "ATLO",
    "label": "ATLO - Ames Natl Corp"
  },
  {
    "value": "ATNI",
    "label": "ATNI - Atn International"
  },
  {
    "value": "ATOM",
    "label": "ATOM - Atomera Inc"
  },
  {
    "value": "ATOS",
    "label": "ATOS - Atossa Genetics Inc"
  },
  {
    "value": "ATRA",
    "label": "ATRA - Atara Biotherap Cmn"
  },
  {
    "value": "ATRC",
    "label": "ATRC - Atricure Inc"
  },
  {
    "value": "ATRI",
    "label": "ATRI - Atrion Corp"
  },
  {
    "value": "ATRO",
    "label": "ATRO - Astronics Cp"
  },
  {
    "value": "ATRS",
    "label": "ATRS - Antares Pharma Cmn"
  },
  {
    "value": "ATSG",
    "label": "ATSG - Air Transport"
  },
  {
    "value": "ATTU",
    "label": "ATTU - Attunity Ltd"
  },
  {
    "value": "ATVI",
    "label": "ATVI - Activision Blizzard"
  },
  {
    "value": "AUBN",
    "label": "AUBN - Auburn Natl Bncp I"
  },
  {
    "value": "AUDC",
    "label": "AUDC - Audiocodes Ltd"
  },
  {
    "value": "AUPH",
    "label": "AUPH - Aurinia Pharm Ord"
  },
  {
    "value": "AVAV",
    "label": "AVAV - Aerovironment Inc"
  },
  {
    "value": "AVDL",
    "label": "AVDL - Avadel Pharmaceuticals Plc"
  },
  {
    "value": "AVEO",
    "label": "AVEO - Aveo Pharmaceuticals"
  },
  {
    "value": "AVGO",
    "label": "AVGO - Broadcom Ltd"
  },
  {
    "value": "AVGR",
    "label": "AVGR - Avinger Inc Cmn"
  },
  {
    "value": "AVHI",
    "label": "AVHI - A V Homes Inc"
  },
  {
    "value": "AVID",
    "label": "AVID - Avid Tech Inc"
  },
  {
    "value": "AVIR",
    "label": "AVIR - Aviragen Therapeutic"
  },
  {
    "value": "AVNW",
    "label": "AVNW - Aviat Networks Inc"
  },
  {
    "value": "AVXL",
    "label": "AVXL - Anavex Lf SC Cmn"
  },
  {
    "value": "AVXS",
    "label": "AVXS - Avexis Inc Cmn Stk"
  },
  {
    "value": "AWRE",
    "label": "AWRE - Aware Inc"
  },
  {
    "value": "AXAR",
    "label": "AXAR - Axar Acquisition Corp"
  },
  {
    "value": "AXARW",
    "label": "AXARW - Axar Acquisition Corp"
  },
  {
    "value": "AXAS",
    "label": "AXAS - Abraxas Petro Corp"
  },
  {
    "value": "AXDX",
    "label": "AXDX - Accelerate Diagnosti"
  },
  {
    "value": "AXGN",
    "label": "AXGN - Axogen Inc Cmn"
  },
  {
    "value": "AXSM",
    "label": "AXSM - Axsome Thera Cmn Stk"
  },
  {
    "value": "AXTI",
    "label": "AXTI - Axt Inc"
  },
  {
    "value": "AYA",
    "label": "AYA - Amaya Inc Cmn Stk"
  },
  {
    "value": "AZPN",
    "label": "AZPN - Aspen Technology Cmn"
  },
  {
    "value": "AZRX",
    "label": "AZRX - Azurrx Biopharma Inc"
  },
  {
    "value": "BABY",
    "label": "BABY - Natus Medical Inc"
  },
  {
    "value": "BANF",
    "label": "BANF - Bancfirst Corp"
  },
  {
    "value": "BANFP",
    "label": "BANFP - Bfc Capital Trust II"
  },
  {
    "value": "BANR",
    "label": "BANR - Banner Corporation"
  },
  {
    "value": "BANX",
    "label": "BANX - Stonecastle Fncl Cp"
  },
  {
    "value": "BASI",
    "label": "BASI - Bioanalytical Syst"
  },
  {
    "value": "BATRA",
    "label": "BATRA - Liberty Braves CS A"
  },
  {
    "value": "BATRK",
    "label": "BATRK - Liberty Braves CS C"
  },
  {
    "value": "BBBY",
    "label": "BBBY - Bed Bath & Beyond"
  },
  {
    "value": "BBC",
    "label": "BBC - Bioshrs Biotec Cl TR"
  },
  {
    "value": "BBGI",
    "label": "BBGI - Beasley Brdcst Gr"
  },
  {
    "value": "BBH",
    "label": "BBH - Vaneck Vectors Biote"
  },
  {
    "value": "BBOX",
    "label": "BBOX - Black Box Cp"
  },
  {
    "value": "BBP",
    "label": "BBP - Bioshrs Biotech Prod"
  },
  {
    "value": "BBRG",
    "label": "BBRG - Bravo Brio Restauran"
  },
  {
    "value": "BBRY",
    "label": "BBRY - Blackberry Limited"
  },
  {
    "value": "BBSI",
    "label": "BBSI - Barrett Business S"
  },
  {
    "value": "BCBP",
    "label": "BCBP - Bcb Bancorp Inc"
  },
  {
    "value": "BCLI",
    "label": "BCLI - Brainstorm Cell Cmn"
  },
  {
    "value": "BCOM",
    "label": "BCOM - B Communications Ltd"
  },
  {
    "value": "BCOR",
    "label": "BCOR - Blucora Inc Cmn"
  },
  {
    "value": "BCOV",
    "label": "BCOV - Brightcove Inc"
  },
  {
    "value": "BCPC",
    "label": "BCPC - Balchem Cp"
  },
  {
    "value": "BCRX",
    "label": "BCRX - Biocryst Pharma Inc"
  },
  {
    "value": "BCTF",
    "label": "BCTF - Bancorp 34 Inc"
  },
  {
    "value": "BDE",
    "label": "BDE - Black Diamond Inc"
  },
  {
    "value": "BDGE",
    "label": "BDGE - Bridge Bancorp Inc"
  },
  {
    "value": "BDSI",
    "label": "BDSI - Biodelivery Sci Intl"
  },
  {
    "value": "BEAT",
    "label": "BEAT - Biotelemetry Inc"
  },
  {
    "value": "BEAV",
    "label": "BEAV - BE Aerospace Inc"
  },
  {
    "value": "BEBE",
    "label": "BEBE - Bebe Stores Inc"
  },
  {
    "value": "BECN",
    "label": "BECN - Beacon Roofing Suppl"
  },
  {
    "value": "BELFA",
    "label": "BELFA - Bel Fuse Cl A"
  },
  {
    "value": "BELFB",
    "label": "BELFB - Bel Fuse Inc Cl B"
  },
  {
    "value": "BFIN",
    "label": "BFIN - Bankfinancial Corpor"
  },
  {
    "value": "BFIT",
    "label": "BFIT - Glbl X Hlth Well ETF"
  },
  {
    "value": "BGCP",
    "label": "BGCP - Bgc Partners Cl A"
  },
  {
    "value": "BGFV",
    "label": "BGFV - Big 5 Sporting"
  },
  {
    "value": "BGNE",
    "label": "BGNE - Beigene Ltd. Ads"
  },
  {
    "value": "BHAC",
    "label": "BHAC - Barington/Hilco Acq"
  },
  {
    "value": "BHACR",
    "label": "BHACR - Barington/Hilco Rgts"
  },
  {
    "value": "BHACU",
    "label": "BHACU - Barington/Hilco Uts"
  },
  {
    "value": "BHACW",
    "label": "BHACW - Barington/Hilco Wts"
  },
  {
    "value": "BHBK",
    "label": "BHBK - Blue Hills Bancorp"
  },
  {
    "value": "BIB",
    "label": "BIB - Proshares Ultra Nasdaq Biotech"
  },
  {
    "value": "BICK",
    "label": "BICK - First Trust BICK Ind"
  },
  {
    "value": "BIDU",
    "label": "BIDU - Baidu Inc"
  },
  {
    "value": "BIIB",
    "label": "BIIB - Biogen Inc Cmn"
  },
  {
    "value": "BIOC",
    "label": "BIOC - Biocept Inc"
  },
  {
    "value": "BIOL",
    "label": "BIOL - Biolase Inc Cmn"
  },
  {
    "value": "BIOP",
    "label": "BIOP - Bioptix Inc"
  },
  {
    "value": "BIOS",
    "label": "BIOS - Bioscrip Inc"
  },
  {
    "value": "BIS",
    "label": "BIS - Proshrs Ulsht Nq Bio"
  },
  {
    "value": "BIVV",
    "label": "BIVV - Bioverativ Inc"
  },
  {
    "value": "BJRI",
    "label": "BJRI - Bj's Restaurants Inc"
  },
  {
    "value": "BKCC",
    "label": "BKCC - Blackrock Cptl Invt"
  },
  {
    "value": "BKEP",
    "label": "BKEP - Blueknight Energy LP"
  },
  {
    "value": "BKEPP",
    "label": "BKEPP - Blueknight Srs A Uts"
  },
  {
    "value": "BKMU",
    "label": "BKMU - Bank Mutual Corp"
  },
  {
    "value": "BKSC",
    "label": "BKSC - Bank of So Car Cp"
  },
  {
    "value": "BL",
    "label": "BL - Blackline Inc"
  },
  {
    "value": "BLBD",
    "label": "BLBD - Blue Bird Corp"
  },
  {
    "value": "BLCM",
    "label": "BLCM - Bellicum Pharma Comm"
  },
  {
    "value": "BLDP",
    "label": "BLDP - Ballard Power Sys"
  },
  {
    "value": "BLDR",
    "label": "BLDR - Builders Firstsource"
  },
  {
    "value": "BLFS",
    "label": "BLFS - Biolife Solutions Cmn"
  },
  {
    "value": "BLIN",
    "label": "BLIN - Bridgeline Digital"
  },
  {
    "value": "BLKB",
    "label": "BLKB - Blackbaud Inc"
  },
  {
    "value": "BLMN",
    "label": "BLMN - Bloomin' Brands Inc"
  },
  {
    "value": "BLMT",
    "label": "BLMT - Bsb Bancorp Inc"
  },
  {
    "value": "BLPH",
    "label": "BLPH - Bellerophon Ther Com"
  },
  {
    "value": "BLRX",
    "label": "BLRX - Biolinerx Ltd"
  },
  {
    "value": "BLUE",
    "label": "BLUE - Bluebird Bio Cmn"
  },
  {
    "value": "BLVD",
    "label": "BLVD - Boulevard AC Cm ST A"
  },
  {
    "value": "BLVDU",
    "label": "BLVDU - Boulevard Acqu Unit"
  },
  {
    "value": "BLVDW",
    "label": "BLVDW - Boulevard Acquisi Wt"
  },
  {
    "value": "BMCH",
    "label": "BMCH - Bmc Stock Holdings"
  },
  {
    "value": "BMLA",
    "label": "BMLA - Recon Bullmark Latam"
  },
  {
    "value": "BMLP",
    "label": "BMLP - Bank of Montreal BMO Elkhorn DWA MLP Select Inde"
  },
  {
    "value": "BMRA",
    "label": "BMRA - Biomerica Inc"
  },
  {
    "value": "BMRC",
    "label": "BMRC - Bank of Marin Bancrp"
  },
  {
    "value": "BMRN",
    "label": "BMRN - Biomarin Pharmaceut"
  },
  {
    "value": "BMTC",
    "label": "BMTC - Bryn Mawr Bank Corp"
  },
  {
    "value": "BNCL",
    "label": "BNCL - Beneficial Bancorp"
  },
  {
    "value": "BNCN",
    "label": "BNCN - BNC Bancorp Inc"
  },
  {
    "value": "BNDX",
    "label": "BNDX - Vanguard Tl Intl Bnd"
  },
  {
    "value": "BNFT",
    "label": "BNFT - Benefitfocus Cmn"
  },
  {
    "value": "BNSO",
    "label": "BNSO - Bonso Elec Intl In"
  },
  {
    "value": "BNTC",
    "label": "BNTC - Benitec Biopharm Ads"
  },
  {
    "value": "BNTCW",
    "label": "BNTCW - Benitec Biopharm Wrt"
  },
  {
    "value": "BOBE",
    "label": "BOBE - Bob Evans Farms"
  },
  {
    "value": "BOCH",
    "label": "BOCH - Bank of Commerce Hld"
  },
  {
    "value": "BOFI",
    "label": "BOFI - Bofi Holding Inc"
  },
  {
    "value": "BOFIL",
    "label": "BOFIL - Bofi Hld Sub Not"
  },
  {
    "value": "BOJA",
    "label": "BOJA - Bojangles Inc CS"
  },
  {
    "value": "BOKF",
    "label": "BOKF - Bok Financial Corp"
  },
  {
    "value": "BOKFL",
    "label": "BOKFL - Bok Financial Corporation"
  },
  {
    "value": "BOLD",
    "label": "BOLD - Audentes Therapeutics Inc Cmn"
  },
  {
    "value": "BONT",
    "label": "BONT - Bon Ton Stores The"
  },
  {
    "value": "BOOM",
    "label": "BOOM - Dynamic Materials"
  },
  {
    "value": "BOSC",
    "label": "BOSC - Bos Better Online"
  },
  {
    "value": "BOTJ",
    "label": "BOTJ - Bank of The Jame Fnl"
  },
  {
    "value": "BOTZ",
    "label": "BOTZ - Global X Robotics & Artificial Intel Thmtc ETF"
  },
  {
    "value": "BPFH",
    "label": "BPFH - Boston Pvt Finl Hldg"
  },
  {
    "value": "BPFHP",
    "label": "BPFHP - Boston Private Dep S"
  },
  {
    "value": "BPFHW",
    "label": "BPFHW - Boston Private Wts"
  },
  {
    "value": "BPMC",
    "label": "BPMC - Blueprint Medi Cm ST"
  },
  {
    "value": "BPOP",
    "label": "BPOP - Popular Inc"
  },
  {
    "value": "BPOPM",
    "label": "BPOPM - Popular Inc Trust II"
  },
  {
    "value": "BPOPN",
    "label": "BPOPN - Popular Inc Trust I"
  },
  {
    "value": "BPTH",
    "label": "BPTH - Bio-Path Holdings"
  },
  {
    "value": "BRCD",
    "label": "BRCD - Brocade Comm Sys"
  },
  {
    "value": "BREW",
    "label": "BREW - Craft Brew Alliance"
  },
  {
    "value": "BRID",
    "label": "BRID - Bridgford Foods Cp"
  },
  {
    "value": "BRKL",
    "label": "BRKL - Brookline Bancorp"
  },
  {
    "value": "BRKR",
    "label": "BRKR - Bruker Corporation"
  },
  {
    "value": "BRKS",
    "label": "BRKS - Brooks Automation"
  },
  {
    "value": "BSET",
    "label": "BSET - Bassett Furniture"
  },
  {
    "value": "BSF",
    "label": "BSF - Bear State Fin Inc"
  },
  {
    "value": "BSFT",
    "label": "BSFT - Broadsoft Inc"
  },
  {
    "value": "BSPM",
    "label": "BSPM - Biostar Pharmaceutic"
  },
  {
    "value": "BSQR",
    "label": "BSQR - Bsquare Corp"
  },
  {
    "value": "BSRR",
    "label": "BSRR - Sierra Bancorp"
  },
  {
    "value": "BSTC",
    "label": "BSTC - Biospecifics Tech Cp"
  },
  {
    "value": "BSTG",
    "label": "BSTG - Biostage Cmn Stk"
  },
  {
    "value": "BTEC",
    "label": "BTEC - Principal Healthcare Innovators Index"
  },
  {
    "value": "BUFF",
    "label": "BUFF - Blue Buffalo Pet Cmn"
  },
  {
    "value": "BUR",
    "label": "BUR - Burcon Nutrascience"
  },
  {
    "value": "BUSE",
    "label": "BUSE - First Busey Corp"
  },
  {
    "value": "BV",
    "label": "BV - Bazaarvoice Inc"
  },
  {
    "value": "BVSN",
    "label": "BVSN - Broadvision Inc"
  },
  {
    "value": "BVXV",
    "label": "BVXV - Biondvax Pharma Ads"
  },
  {
    "value": "BVXVW",
    "label": "BVXVW - Biondvax Pharma Wt"
  },
  {
    "value": "BWEN",
    "label": "BWEN - Broadwind Energy Inc"
  },
  {
    "value": "BWFG",
    "label": "BWFG - Bankwell Financial"
  },
  {
    "value": "BWINA",
    "label": "BWINA - Baldwin Lyons Cl A"
  },
  {
    "value": "BWINB",
    "label": "BWINB - Baldwin Lyons Cl B"
  },
  {
    "value": "BWLD",
    "label": "BWLD - Buffalo Wild Wings"
  },
  {
    "value": "BYBK",
    "label": "BYBK - Bay Bancorp Inc"
  },
  {
    "value": "BYFC",
    "label": "BYFC - Broadway Fin Cp"
  },
  {
    "value": "BYSI",
    "label": "BYSI - Beyondspring Inc. Ordinary Shares"
  },
  {
    "value": "BZUN",
    "label": "BZUN - Baozun Inc Ads"
  },
  {
    "value": "CA",
    "label": "CA - CA Inc"
  },
  {
    "value": "CAAS",
    "label": "CAAS - China Automotive Sys"
  },
  {
    "value": "CAC",
    "label": "CAC - Camden Natl Cp"
  },
  {
    "value": "CACB",
    "label": "CACB - Cascade Bancorp"
  },
  {
    "value": "CACC",
    "label": "CACC - Credit Acceptance"
  },
  {
    "value": "CACQ",
    "label": "CACQ - Caesars Acquisition"
  },
  {
    "value": "CADC",
    "label": "CADC - China Advanced Const"
  },
  {
    "value": "CAFD",
    "label": "CAFD - 8Point3 Energy Cl A"
  },
  {
    "value": "CAFN",
    "label": "CAFN - Cachet Financial Solutions Inc"
  },
  {
    "value": "CAKE",
    "label": "CAKE - Cheesecake Fact"
  },
  {
    "value": "CALA",
    "label": "CALA - Calithera Biosci Com"
  },
  {
    "value": "CALD",
    "label": "CALD - Callidus Software"
  },
  {
    "value": "CALI",
    "label": "CALI - China Auto Logistics"
  },
  {
    "value": "CALL",
    "label": "CALL - Magicjack Vocaltec L"
  },
  {
    "value": "CALM",
    "label": "CALM - Cal-Maine Foods In"
  },
  {
    "value": "CAMP",
    "label": "CAMP - Calamp Corp"
  },
  {
    "value": "CAMT",
    "label": "CAMT - Camtek Ltd"
  },
  {
    "value": "CAPN",
    "label": "CAPN - Capnia Inc Cmn Stk"
  },
  {
    "value": "CAPNW",
    "label": "CAPNW - Capnia Inc A Wrnt"
  },
  {
    "value": "CAPR",
    "label": "CAPR - Capricor Therap Cmn"
  },
  {
    "value": "CAR",
    "label": "CAR - Avis Budget Group I"
  },
  {
    "value": "CARA",
    "label": "CARA - Cara Therapeutics"
  },
  {
    "value": "CARB",
    "label": "CARB - Carbonite Inc"
  },
  {
    "value": "CARO",
    "label": "CARO - Carolina Finacl Cmn"
  },
  {
    "value": "CART",
    "label": "CART - Carolina Trust Bank"
  },
  {
    "value": "CARV",
    "label": "CARV - Carver Bancorp"
  },
  {
    "value": "CARZ",
    "label": "CARZ - First Trust Nq Gbl Auto"
  },
  {
    "value": "CASC",
    "label": "CASC - Cascadian Therapeutics Inc"
  },
  {
    "value": "CASH",
    "label": "CASH - Meta Financial Grp"
  },
  {
    "value": "CASI",
    "label": "CASI - Casi Phrmactcls Inc"
  },
  {
    "value": "CASM",
    "label": "CASM - Cas Medical Sys Inc"
  },
  {
    "value": "CASS",
    "label": "CASS - Cass Information Sys"
  },
  {
    "value": "CASY",
    "label": "CASY - Casey's General Stor"
  },
  {
    "value": "CATB",
    "label": "CATB- Catabasis Pharma Cmn"
  },
  {
    "value": "CATH",
    "label": "CATH - Glbl X SP 500 Cth V"
  },
  {
    "value": "CATM",
    "label": "CATM - Cardtronics Inc"
  },
  {
    "value": "CATY",
    "label": "CATY - Cathay Genl Bncp"
  },
  {
    "value": "CATYW",
    "label": "CATYW - Cathay General Banc"
  },
  {
    "value": "CAVM",
    "label": "CAVM - Cavium Inc"
  },
  {
    "value": "CBAK",
    "label": "CBAK - China Bak Battery"
  },
  {
    "value": "CBAN",
    "label": "CBAN - Colony Bankcorp Inc"
  },
  {
    "value": "CBAY",
    "label": "CBAY - Cymabay Therapeutics"
  },
  {
    "value": "CBF",
    "label": "CBF - Capital Bnk Fin Cl A"
  },
  {
    "value": "CBFV",
    "label": "CBFV - Cb Financial Svc Cmn"
  },
  {
    "value": "CBIO",
    "label": "CBIO - Catalyst Bio Cmn"
  },
  {
    "value": "CBLI",
    "label": "CBLI - Cleveland Biolabs"
  },
  {
    "value": "CBMG",
    "label": "CBMG - Cellular Biomedicine"
  },
  {
    "value": "CBMX",
    "label": "CBMX - Combimatrix Corp"
  },
  {
    "value": "CBMXW",
    "label": "CBMXW - Combimatrix Corp Wt"
  },
  {
    "value": "CBOE",
    "label": "CBOE - CBOE Holdings Inc"
  },
  {
    "value": "CBPO",
    "label": "CBPO - China Biologic Produ"
  },
  {
    "value": "CBRL",
    "label": "CBRL - Cracker Barrel"
  },
  {
    "value": "CBSH",
    "label": "CBSH - Commerce Bancshares"
  },
  {
    "value": "CBSHP",
    "label": "CBSHP - Commerce BNC B Dep"
  },
  {
    "value": "CCBG",
    "label": "CCBG - Capital City Bank Gr"
  },
  {
    "value": "CCCL",
    "label": "CCCL - China Ceramics Co"
  },
  {
    "value": "CCCR",
    "label": "CCCR - China Commercial Cre"
  },
  {
    "value": "CCD",
    "label": "CCD - Calams Dy Cnv In Cmn"
  },
  {
    "value": "CCIH",
    "label": "CCIH - Chinacache Hldgs ADR"
  },
  {
    "value": "CCLP",
    "label": "CCLP - Csi Compressco Cmn"
  },
  {
    "value": "CCMP",
    "label": "CCMP - Cabot Microelectron"
  },
  {
    "value": "CCN",
    "label": "CCN - Cardconnect Corp"
  },
  {
    "value": "CCNE",
    "label": "CCNE - Cnb Financial Corp"
  },
  {
    "value": "CCOI",
    "label": "CCOI - Cogent Comm Hldgs"
  },
  {
    "value": "CCRC",
    "label": "CCRC - China Customer Ord"
  },
  {
    "value": "CCRN",
    "label": "CCRN - Cross Ctry Hlthcr"
  },
  {
    "value": "CCUR",
    "label": "CCUR - Concurrent Computer"
  },
  {
    "value": "CCXI",
    "label": "CCXI - Chemocentryx Inc"
  },
  {
    "value": "CDC",
    "label": "CDC - Victory Cemp US Eq I"
  },
  {
    "value": "CDEV",
    "label": "CDEV - Centennial Resource Development Inc"
  },
  {
    "value": "CDEVW",
    "label": "CDEVW - Centennial Resource Development Inc"
  },
  {
    "value": "CDK",
    "label": "CDK - Cdk Global Inc"
  },
  {
    "value": "CDL",
    "label": "CDL - Victory Cemp US Larg"
  },
  {
    "value": "CDNA",
    "label": "CDNA - Caredx Inc Cmn"
  },
  {
    "value": "CDNS",
    "label": "CDNS - Cadence Design Sys"
  },
  {
    "value": "CDOR",
    "label": "CDOR - Condor Hospitality T"
  },
  {
    "value": "CDTI",
    "label": "CDTI - Clean Diesel Technol"
  },
  {
    "value": "CDTX",
    "label": "CDTX - Cidara Thera Cmn"
  },
  {
    "value": "CDW",
    "label": "CDW - CDW Corporation"
  },
  {
    "value": "CDXC",
    "label": "CDXC - Chromadex Corp CS"
  },
  {
    "value": "CDXS",
    "label": "CDXS - Codexis Inc"
  },
  {
    "value": "CDZI",
    "label": "CDZI - Cadiz Inc"
  },
  {
    "value": "CECE",
    "label": "CECE - C E C O Envir"
  },
  {
    "value": "CECO",
    "label": "CECO - Career Education"
  },
  {
    "value": "CELG",
    "label": "CELG - Celgene Corp"
  },
  {
    "value": "CELGZ",
    "label": "CELGZ - Celgene Cp Cvr"
  },
  {
    "value": "CEMI",
    "label": "CEMI - Chembio Diagnostics"
  },
  {
    "value": "CEMP",
    "label": "CEMP - Cempra Inc"
  },
  {
    "value": "CENT",
    "label": "CENT - Central Garden"
  },
  {
    "value": "CENTA",
    "label": "CENTA - Central Garden & Pet"
  },
  {
    "value": "CENX",
    "label": "CENX - Century Aluminum C"
  },
  {
    "value": "CERC",
    "label": "CERC - Cerecor Inc Cmn Stk"
  },
  {
    "value": "CERCW",
    "label": "CERCW - Cerecor Inc Cl A Wt"
  },
  {
    "value": "CERCZ",
    "label": "CERCZ - Cerecor Inc Cl B Wt"
  },
  {
    "value": "CERN",
    "label": "CERN - Cerner Corp"
  },
  {
    "value": "CERS",
    "label": "CERS - Cerus Corp"
  },
  {
    "value": "CERU",
    "label": "CERU - Cerulean Pharma Cmn"
  },
  {
    "value": "CETC",
    "label": "CETC - Hongli Clean Energy Technologies Corp"
  },
  {
    "value": "CETV",
    "label": "CETV - Central EUR Med A"
  },
  {
    "value": "CETX",
    "label": "CETX - Cemtrex Inc Cmn Stk"
  },
  {
    "value": "CETXP",
    "label": "CETXP - Cemtrex Inc. Series 1 Pfd."
  },
  {
    "value": "CETXW",
    "label": "CETXW - Cemtrex Inc. Series 1 Warrant"
  },
  {
    "value": "CEVA",
    "label": "CEVA - Ceva Inc"
  },
  {
    "value": "CEZ",
    "label": "CEZ - Vctry Cemp EM Vlt Wt"
  },
  {
    "value": "CFA",
    "label": "CFA - Victory Cemp US 500"
  },
  {
    "value": "CFBK",
    "label": "CFBK - Central Fed Cp"
  },
  {
    "value": "CFCB",
    "label": "CFCB - Centrue Financial Cmn"
  },
  {
    "value": "CFCO",
    "label": "CFCO - Cf Corp"
  },
  {
    "value": "CFCOU",
    "label": "CFCOU - Cf Corporation Units"
  },
  {
    "value": "CFCOW",
    "label": "CFCOW - Cf Corporation"
  },
  {
    "value": "CFFI",
    "label": "CFFI - C&F Financial Corp"
  },
  {
    "value": "CFFN",
    "label": "CFFN - Capitol Fed Finl Inc"
  },
  {
    "value": "CFMS",
    "label": "CFMS - Conformis Inc CS"
  },
  {
    "value": "CFNB",
    "label": "CFNB - Calif First National"
  },
  {
    "value": "CFNL",
    "label": "CFNL - Cardinal Fin Cp"
  },
  {
    "value": "CFO",
    "label": "CFO - Victory Cemp Us500E"
  },
  {
    "value": "CFRX",
    "label": "CFRX - Contrafect Cmn"
  },
  {
    "value": "CG",
    "label": "CG - The Carlyle Group"
  },
  {
    "value": "CGEN",
    "label": "CGEN - Compugen Ltd"
  },
  {
    "value": "CGIX",
    "label": "CGIX - Cancer Genetics Inc"
  },
  {
    "value": "CGNT",
    "label": "CGNT - Cogentix Medical In"
  },
  {
    "value": "CGNX",
    "label": "CGNX - Cognex Cp"
  },
  {
    "value": "CGO",
    "label": "CGO - Calamos Glb Ttl Rtn"
  },
  {
    "value": "CHCI",
    "label": "CHCI - Comstock Hldgs Cos"
  },
  {
    "value": "CHCO",
    "label": "CHCO - City Holding Co"
  },
  {
    "value": "CHDN",
    "label": "CHDN - Churchill Downs In"
  },
  {
    "value": "CHEF",
    "label": "CHEF- The Chefs Warehouse"
  },
  {
    "value": "CHEK",
    "label": "CHEK - Check-Cap Ltd. Ord"
  },
  {
    "value": "CHEKW",
    "label": "CHEKW - Check-Cap Ltd A Wt"
  },
  {
    "value": "CHFC",
    "label": "CHFC - Chemical Financial"
  },
  {
    "value": "CHFN",
    "label": "CHFN - Charter Finl Corp"
  },
  {
    "value": "CHI",
    "label": "CHI - Calamos Cv Opp & Inc"
  },
  {
    "value": "CHKE",
    "label": "CHKE - Cherokee Inc"
  },
  {
    "value": "CHKP",
    "label": "CHKP - Check Point Software"
  },
  {
    "value": "CHMA",
    "label": "CHMA - Chiasma Inc Cmn"
  },
  {
    "value": "CHMG",
    "label": "CHMG - Chemung Financial Cp"
  },
  {
    "value": "CHNR",
    "label": "CHNR - China Natural Res"
  },
  {
    "value": "CHRS",
    "label": "CHRS - Coherus Bio Cmn Stk"
  },
  {
    "value": "CHRW",
    "label": "CHRW - C.H. Robinson Ww"
  },
  {
    "value": "CHSCL",
    "label": "CHSCL - CHS B Cum Pfd Srs 4"
  },
  {
    "value": "CHSCM",
    "label": "CHSCM - CHS Pfd Clb Ser3"
  },
  {
    "value": "CHSCN",
    "label": "CHSCN - CHS Inc Pfd B Srs 2"
  },
  {
    "value": "CHSCO",
    "label": "CHSCO - CHS Inc Cl B Pfd"
  },
  {
    "value": "CHSCP",
    "label": "CHSCP - CHS Inc Cum Pfd"
  },
  {
    "value": "CHTR",
    "label": "CHTR - Charter Communicatio"
  },
  {
    "value": "CHUBA",
    "label": "CHUBA - Commercehub Inc"
  },
  {
    "value": "CHUBK",
    "label": "CHUBK - Commercehub Inc"
  },
  {
    "value": "CHUY",
    "label": "CHUY - Chuy's Holdings Inc"
  },
  {
    "value": "CHW",
    "label": "CHW - Calamos Gbl Dyn Inc"
  },
  {
    "value": "CHY",
    "label": "CHY - Calamos Cv & High In"
  },
  {
    "value": "CIBR",
    "label": "CIBR - First TR Ndq Cybr ETF"
  },
  {
    "value": "CID",
    "label": "CID - Victory Cemp Interna"
  },
  {
    "value": "CIDM",
    "label": "CIDM - Cinedigm Corp"
  },
  {
    "value": "CIGI",
    "label": "CIGI - Colliers Intl Grp In"
  },
  {
    "value": "CIL",
    "label": "CIL - Victory Cemp Intl Vo"
  },
  {
    "value": "CINF",
    "label": "CINF - Cincinnati Financial"
  },
  {
    "value": "CIVB",
    "label": "CIVB - Civista Bncshrs Cmn"
  },
  {
    "value": "CIVBP",
    "label": "CIVBP - Civista Bancshrs Dep"
  },
  {
    "value": "CIZ",
    "label": "CIZ - Victory Cemp Dev Enh"
  },
  {
    "value": "CIZN",
    "label": "CIZN - Citizens Hldg Co"
  },
  {
    "value": "CJJD",
    "label": "CJJD - China Jojo Drugstore"
  },
  {
    "value": "CLAC",
    "label": "CLAC - Capitol Acq Corp III"
  },
  {
    "value": "CLACU",
    "label": "CLACU - Capitol Acq III Ut"
  },
  {
    "value": "CLACW",
    "label": "CLACW - Capitol Acq Cp 3 Wts"
  },
  {
    "value": "CLBS",
    "label": "CLBS - Caladrius Bio Cmn"
  },
  {
    "value": "CLCT",
    "label": "CLCT - Collectors Universe"
  },
  {
    "value": "CLDC",
    "label": "CLDC - China Lending Corp"
  },
  {
    "value": "CLDX",
    "label": "CLDX - Celldex Therapeutics"
  },
  {
    "value": "CLFD",
    "label": "CLFD - Clearfield Inc"
  },
  {
    "value": "CLIR",
    "label": "CLIR - Clearsign Combustion"
  },
  {
    "value": "CLIRW",
    "label": "CLIRW - Clearsign Combustion Corporation Warrant"
  },
  {
    "value": "CLLS",
    "label": "CLLS - Cellectis S.A. Ads"
  },
  {
    "value": "CLMT",
    "label": "CLMT - Calumet Specialty Pr"
  },
  {
    "value": "CLNE",
    "label": "CLNE - Clean Energy Fuels"
  },
  {
    "value": "CLNT",
    "label": "CLNT - Cleantech Solutions"
  },
  {
    "value": "CLRB",
    "label": "CLRB - Cellectar Biosc Cmn"
  },
  {
    "value": "CLRBW",
    "label": "CLRBW - Cellectar Biosc Wt"
  },
  {
    "value": "CLRBZ",
    "label": "CLRBZ - Cellectar Bio Sra Wt"
  },
  {
    "value": "CLRO",
    "label": "CLRO - Clearone Inc"
  },
  {
    "value": "CLSD",
    "label": "CLSD - Clearside Biomedi Cmn"
  },
  {
    "value": "CLSN",
    "label": "CLSN - Celsion Corp"
  },
  {
    "value": "CLUB",
    "label": "CLUB - Town Sports Internat"
  },
  {
    "value": "CLVS",
    "label": "CLVS - Clovis Oncology Inc"
  },
  {
    "value": "CLWT",
    "label": "CLWT - Euro Tech Hldg"
  },
  {
    "value": "CMCO",
    "label": "CMCO - Columbus Mckinnon"
  },
  {
    "value": "CMCSA",
    "label": "CMCSA - Comcast Corp A"
  },
  {
    "value": "CMCT",
    "label": "CMCT - Cim Commercial TR Cp"
  },
  {
    "value": "CME",
    "label": "CME - CME Group Inc"
  },
  {
    "value": "CMFN",
    "label": "CMFN - Cm Finance Cmn"
  },
  {
    "value": "CMLS",
    "label": "CMLS - Cumulus Media Inc"
  },
  {
    "value": "CMPR",
    "label": "CMPR - Cimpress N.V. Ord"
  },
  {
    "value": "CMRX",
    "label": "CMRX - Chimerix Inc"
  },
  {
    "value": "CMTL",
    "label": "CMTL - Comtech Telecom Co"
  },
  {
    "value": "CNAT",
    "label": "CNAT - Conatus Pharmaceutic"
  },
  {
    "value": "CNBKA",
    "label": "CNBKA - Century Bancorp Inc"
  },
  {
    "value": "CNCE",
    "label": "CNCE - Concert Pharmaceutic"
  },
  {
    "value": "CNCR",
    "label": "CNCR - Loncar Cancer Immuno"
  },
  {
    "value": "CNET",
    "label": "CNET - Chinanet Online Hldg"
  },
  {
    "value": "CNFR",
    "label": "CNFR - Conifer Holdings Cmn"
  },
  {
    "value": "CNIT",
    "label": "CNIT - China Info Tech"
  },
  {
    "value": "CNMD",
    "label": "CNMD - C O N M E D Cp"
  },
  {
    "value": "CNOB",
    "label": "CNOB - Connectone Bancorp"
  },
  {
    "value": "CNSL",
    "label": "CNSL - Consolidated Communi"
  },
  {
    "value": "CNTF",
    "label": "CNTF - China Techfaith Wire"
  },
  {
    "value": "CNTY",
    "label": "CNTY - Century Casinos In"
  },
  {
    "value": "CNXN",
    "label": "CNXN - PC Connection Inc"
  },
  {
    "value": "CNXR",
    "label": "CNXR - Connecture Inc Cmn"
  },
  {
    "value": "COBZ",
    "label": "COBZ - Cobiz Financial Inc"
  },
  {
    "value": "COGT",
    "label": "COGT - Cogint Inc"
  },
  {
    "value": "COHR",
    "label": "COHR - Coherent Inc"
  },
  {
    "value": "COHU",
    "label": "COHU - Cohu Inc"
  },
  {
    "value": "COKE",
    "label": "COKE - Coca Cola Bot Cons"
  },
  {
    "value": "COLB",
    "label": "COLB - Columbia Banking Sys"
  },
  {
    "value": "COLL",
    "label": "COLL - Collegium Pharma Cmn"
  },
  {
    "value": "COLM",
    "label": "COLM - Columbia Sprtswr"
  },
  {
    "value": "COMM",
    "label": "COMM - Commscope Holding Co"
  },
  {
    "value": "COMT",
    "label": "COMT - Ishrs Cmdty Sel Stra"
  },
  {
    "value": "CONE",
    "label": "CONE - Cyrusone Inc Cmn"
  },
  {
    "value": "CONN",
    "label": "CONN - Conn's Inc"
  },
  {
    "value": "COOL",
    "label": "COOL - Majesco Entertainmnt"
  },
  {
    "value": "CORE",
    "label": "CORE - Core Mark Holding"
  },
  {
    "value": "CORI",
    "label": "CORI - Corium Intl Cmn"
  },
  {
    "value": "CORT",
    "label": "CORT - Corcept Therapeutics"
  },
  {
    "value": "COST",
    "label": "COST - Costco Wholesale"
  },
  {
    "value": "COUP",
    "label": "COUP - Coupa Software Inc"
  },
  {
    "value": "COVS",
    "label": "COVS - Covisint Corp Cmn"
  },
  {
    "value": "COWN",
    "label": "COWN - Cowen Group Inc"
  },
  {
    "value": "COWNL",
    "label": "COWNL - Cowen Grp 8.25 Sr Nt"
  },
  {
    "value": "COYN",
    "label": "COYN - Copsync Inc Cmn"
  },
  {
    "value": "COYNW",
    "label": "COYNW - Copsync Inc Warrnt"
  },
  {
    "value": "CPAA",
    "label": "CPAA - Conyers Park Acquisition Corp"
  },
  {
    "value": "CPAAU",
    "label": "CPAAU - Conyers Park Acquisition Corp"
  },
  {
    "value": "CPAAW",
    "label": "CPAAW - Conyers Park Acquisition Corp. Wt"
  },
  {
    "value": "CPAH",
    "label": "CPAH - Counterpath Corp"
  },
  {
    "value": "CPHC",
    "label": "CPHC - Canterbury Park Hl"
  },
  {
    "value": "CPIX",
    "label": "CPIX - Cumberland Pharmaceu"
  },
  {
    "value": "CPLA",
    "label": "CPLA - Capella Education Co"
  },
  {
    "value": "CPLP",
    "label": "CPLP - Capital Product Part"
  },
  {
    "value": "CPRT",
    "label": "CPRT - Copart Inc"
  },
  {
    "value": "CPRX",
    "label": "CPRX - Catalyst Pharm Inc"
  },
  {
    "value": "CPSH",
    "label": "CPSH - Cps Technologies Cmn"
  },
  {
    "value": "CPSI",
    "label": "CPSI - Computer Programs"
  },
  {
    "value": "CPSS",
    "label": "CPSS - Consumer Portfol"
  },
  {
    "value": "CPST",
    "label": "CPST - Capstone Turbine Cp"
  },
  {
    "value": "CPTA",
    "label": "CPTA - Capitala Finance Crp"
  },
  {
    "value": "CRAI",
    "label": "CRAI - Cra International"
  },
  {
    "value": "CRAY",
    "label": "CRAY - Cray Inc"
  },
  {
    "value": "CRBP",
    "label": "CRBP - Corbus Pharma Cmn"
  },
  {
    "value": "CRDS",
    "label": "CRDS - Crossroads Systems"
  },
  {
    "value": "CRDT",
    "label": "CRDT - Wisdmtree Strg Cp Bo"
  },
  {
    "value": "CREE",
    "label": "CREE - Cree Inc"
  },
  {
    "value": "CREG",
    "label": "CREG - China Recycling Ener"
  },
  {
    "value": "CRESY",
    "label": "CRESY - Cresud Sacif ADR"
  },
  {
    "value": "CRIS",
    "label": "CRIS - Curis Inc"
  },
  {
    "value": "CRME",
    "label": "CRME - Cardiome Pharma Corp"
  },
  {
    "value": "CRMT",
    "label": "CRMT - America's Car-Mart"
  },
  {
    "value": "CRNT",
    "label": "CRNT - Ceragon Networks Ltd"
  },
  {
    "value": "CROX",
    "label": "CROX - Crocs Inc"
  },
  {
    "value": "CRSP",
    "label": "CRSP - Crispr Therapeutics Ag"
  },
  {
    "value": "CRTN",
    "label": "CRTN - Cartesian Inc Cmn"
  },
  {
    "value": "CRTO",
    "label": "CRTO - Criteo S.A. Ads"
  },
  {
    "value": "CRUS",
    "label": "CRUS - Cirrus Logic Inc"
  },
  {
    "value": "CRVL",
    "label": "CRVL - Corvel Cp"
  },
  {
    "value": "CRVS",
    "label": "CRVS - Corvus Pharma Com"
  },
  {
    "value": "CRWS",
    "label": "CRWS - Crown Crafts Inc"
  },
  {
    "value": "CRZO",
    "label": "CRZO - Carrizo Oil & Gas"
  },
  {
    "value": "CSA",
    "label": "CSA - Victory Cemp US Smal"
  },
  {
    "value": "CSB",
    "label": "CSB - Victory Cemp US SC H"
  },
  {
    "value": "CSBK",
    "label": "CSBK - Clifton Bancorp Inc"
  },
  {
    "value": "CSBR",
    "label": "CSBR - Champions Oncolog Cmn"
  },
  {
    "value": "CSCO",
    "label": "CSCO - Cisco Systems Inc"
  },
  {
    "value": "CSF",
    "label": "CSF - Victory Cemp US Disc"
  },
  {
    "value": "CSFL",
    "label": "CSFL - Centerstate Bks Inc"
  },
  {
    "value": "CSGP",
    "label": "CSGP - Costar Group Inc"
  },
  {
    "value": "CSGS",
    "label": "CSGS - C S G Sys Intl"
  },
  {
    "value": "CSII",
    "label": "CSII - Cardiovascular Syst"
  },
  {
    "value": "CSIQ",
    "label": "CSIQ - Canadian Solar Inc"
  },
  {
    "value": "CSOD",
    "label": "CSOD - Cornerstone Ondemand"
  },
  {
    "value": "CSPI",
    "label": "CSPI - C S P Inc"
  },
  {
    "value": "CSQ",
    "label": "CSQ - Calamos Strgc Ttl Rt"
  },
  {
    "value": "CSTE",
    "label": "CSTE - Caesarstone Sdot-Yam"
  },
  {
    "value": "CSTR",
    "label": "CSTR - Capstar Financial Holdings Inc"
  },
  {
    "value": "CSWC",
    "label": "CSWC - Capital Southwest"
  },
  {
    "value": "CSWI",
    "label": "CSWI - Csw Industrials Inc"
  },
  {
    "value": "CSX",
    "label": "CSX - CSX Corporation"
  },
  {
    "value": "CTAS",
    "label": "CTAS - Cintas Corp"
  },
  {
    "value": "CTBI",
    "label": "CTBI - Community TR Bancp"
  },
  {
    "value": "CTG",
    "label": "CTG - Computer Task Gp Inc"
  },
  {
    "value": "CTHR",
    "label": "CTHR - Charles & Colvard"
  },
  {
    "value": "CTIB",
    "label": "CTIB - Cti Inds Corp"
  },
  {
    "value": "CTIC",
    "label": "CTIC - Cti Biopharm Corp"
  },
  {
    "value": "CTMX",
    "label": "CTMX - Cytomx Thera Cmn Stk"
  },
  {
    "value": "CTRE",
    "label": "CTRE - Caretrust REIT Inc"
  },
  {
    "value": "CTRL",
    "label": "CTRL - Control4 Corporation"
  },
  {
    "value": "CTRN",
    "label": "CTRN - Citi Trends Inc"
  },
  {
    "value": "CTRP",
    "label": "CTRP - Ctrip.Com Intl Ltd"
  },
  {
    "value": "CTRV",
    "label": "CTRV - Contravir Pharmaceut"
  },
  {
    "value": "CTSH",
    "label": "CTSH - Cognizant Tech Sol"
  },
  {
    "value": "CTSO",
    "label": "CTSO - Cytosorbents Cor"
  },
  {
    "value": "CTWS",
    "label": "CTWS - Conn Water Svcs In"
  },
  {
    "value": "CTXS",
    "label": "CTXS - Citrix Systems Inc"
  },
  {
    "value": "CUBA",
    "label": "CUBA - Herzfeld Caribbean"
  },
  {
    "value": "CUBN",
    "label": "CUBN - Commerce Un Bcsh Cmn"
  },
  {
    "value": "CUI",
    "label": "CUI - Cui Global Inc"
  },
  {
    "value": "CUNB",
    "label": "CUNB - Cu Bancorp Cmn Stk"
  },
  {
    "value": "CUR",
    "label": "CUR - Neuralstem Inc"
  },
  {
    "value": "CUTR",
    "label": "CUTR - Cutera Inc"
  },
  {
    "value": "CVBF",
    "label": "CVBF - Cvb Financial Corp"
  },
  {
    "value": "CVCO",
    "label": "CVCO - Cavco Inds Inc"
  },
  {
    "value": "CVCY",
    "label": "CVCY - Central Vly Cmty Bcp"
  },
  {
    "value": "CVGI",
    "label": "CVGI - Commercial Vehicle G"
  },
  {
    "value": "CVGW",
    "label": "CVGW - Calavo Growers Inc"
  },
  {
    "value": "CVLT",
    "label": "CVLT - Commvault Systems"
  },
  {
    "value": "CVLY",
    "label": "CVLY - Codorus Valley Bncp"
  },
  {
    "value": "CVTI",
    "label": "CVTI - Covenant Transportn"
  },
  {
    "value": "CVV",
    "label": "CVV - CVD Equipment Corp"
  },
  {
    "value": "CWAY",
    "label": "CWAY - Coastway Bancorp Inc"
  },
  {
    "value": "CWBC",
    "label": "CWBC - Community West Bncsh"
  },
  {
    "value": "CWCO",
    "label": "CWCO - Cons Water Co Inc"
  },
  {
    "value": "CWST",
    "label": "CWST - Casella Waste Sys"
  },
  {
    "value": "CXDC",
    "label": "CXDC - China Xd Plastics Co"
  },
  {
    "value": "CXRX",
    "label": "CXRX - Concordia International"
  },
  {
    "value": "CXSE",
    "label": "CXSE - Wisdomtree China Ex-"
  },
  {
    "value": "CY",
    "label": "CY - Cypress Semiconductr"
  },
  {
    "value": "CYAD",
    "label": "CYAD - Celyad Sa Ads"
  },
  {
    "value": "CYAN",
    "label": "CYAN - Cyanotech Corp"
  },
  {
    "value": "CYBE",
    "label": "CYBE - Cyberoptics Cp"
  },
  {
    "value": "CYBR",
    "label": "CYBR - Cyberark Soft Ord"
  },
  {
    "value": "CYCC",
    "label": "CYCC - Cyclacel Pharmaceuti"
  },
  {
    "value": "CYCCP",
    "label": "CYCCP - Cyclacel Pharmaceuti"
  },
  {
    "value": "CYHHZ",
    "label": "CYHHZ - Community Health Sys"
  },
  {
    "value": "CYNO",
    "label": "CYNO - Cynosure Inc"
  },
  {
    "value": "CYOU",
    "label": "CYOU - Changyou.Com Limited"
  },
  {
    "value": "CYRN",
    "label": "CYRN - Cyren Ltd"
  },
  {
    "value": "CYRX",
    "label": "CYRX - Cryoport Inc"
  },
  {
    "value": "CYRXW",
    "label": "CYRXW - Cryoport Inc Wts"
  },
  {
    "value": "CYTK",
    "label": "CYTK - Cytokinetics"
  },
  {
    "value": "CYTR",
    "label": "CYTR - Cytrx Cp"
  },
  {
    "value": "CYTX",
    "label": "CYTX - Cytori Therapeutics"
  },
  {
    "value": "CYTXW",
    "label": "CYTXW - Cytori Therapeutics Inc"
  },
  {
    "value": "CZFC",
    "label": "CZFC - Citizens First Corp"
  },
  {
    "value": "CZNC",
    "label": "CZNC - Citizens Nrthn Cp"
  },
  {
    "value": "CZR",
    "label": "CZR - Caesars Entertnmt"
  },
  {
    "value": "CZWI",
    "label": "CZWI - Citizens Community"
  },
  {
    "value": "DAIO",
    "label": "DAIO - Data I O Cp"
  },
  {
    "value": "DAKT",
    "label": "DAKT - Daktronics Inc"
  },
  {
    "value": "DAVE",
    "label": "DAVE - Famous Daves of Am"
  },
  {
    "value": "DAX",
    "label": "DAX - Recon Cp DAX ETF"
  },
  {
    "value": "DBVT",
    "label": "DBVT - Dbv Technologies Ads"
  },
  {
    "value": "DCIX",
    "label": "DCIX - Diana Containrshp"
  },
  {
    "value": "DCOM",
    "label": "DCOM - Dime Community Bncsh"
  },
  {
    "value": "DCTH",
    "label": "DCTH - Delcath Systems Inc"
  },
  {
    "value": "DDBI",
    "label": "DDBI - Legg Mason Dev Exus"
  },
  {
    "value": "DELT",
    "label": "DELT - Delta Tech HD Ltd Or"
  },
  {
    "value": "DELTW",
    "label": "DELTW - Delta Tech Hld Wt"
  },
  {
    "value": "DENN",
    "label": "DENN - Dennys Corp"
  },
  {
    "value": "DEPO",
    "label": "DEPO - Depomed Inc"
  },
  {
    "value": "DERM",
    "label": "DERM - Dermira Inc Cm ST"
  },
  {
    "value": "DEST",
    "label": "DEST - Destination Maternty"
  },
  {
    "value": "DFBG",
    "label": "DFBG - Differntl Brands Cmn"
  },
  {
    "value": "DFFN",
    "label": "DFFN - Diffusion Pharmaceuticals Inc"
  },
  {
    "value": "DFNL",
    "label": "DFNL - Davis Fundamental ETF Trust Davis Select Financi"
  },
  {
    "value": "DFRG",
    "label": "DFRG - Del Frisco's Restrnt"
  },
  {
    "value": "DFVL",
    "label": "DFVL - Ipath 5 Year Bull"
  },
  {
    "value": "DFVS",
    "label": "DFVS - Ipath 5 Year Bear Et"
  },
  {
    "value": "DGAS",
    "label": "DGAS - Delta Natural Gas"
  },
  {
    "value": "DGICA",
    "label": "DGICA - Donegal Group Cl A"
  },
  {
    "value": "DGICB",
    "label": "DGICB - Donegal Group Cl B"
  },
  {
    "value": "DGII",
    "label": "DGII - Digi Intl Inc"
  },
  {
    "value": "DGLD",
    "label": "DGLD - VS 3X Inv Gold"
  },
  {
    "value": "DGLT",
    "label": "DGLT - Digiliti Money Group Inc."
  },
  {
    "value": "DGLY",
    "label": "DGLY - Digital Ally Inc"
  },
  {
    "value": "DGRE",
    "label": "DGRE - Wisdomtree Emg Mkts"
  },
  {
    "value": "DGRS",
    "label": "DGRS - Wisdomtree US SC Qly"
  },
  {
    "value": "DGRW",
    "label": "DGRW - Wisdomtree US Qlty D"
  },
  {
    "value": "DHIL",
    "label": "DHIL - Diamond Hill Inv"
  },
  {
    "value": "DHXM",
    "label": "DHXM - Dhx Media Varbl Vtg"
  },
  {
    "value": "DIOD",
    "label": "DIOD - Diodes Inc"
  },
  {
    "value": "DISCA",
    "label": "DISCA - Discovery Comm A"
  },
  {
    "value": "DISCB",
    "label": "DISCB - Discovery Comm B"
  },
  {
    "value": "DISCK",
    "label": "DISCK - Discovery Comm Inc"
  },
  {
    "value": "DISH",
    "label": "DISH - Dish Network Corp"
  },
  {
    "value": "DJCO",
    "label": "DJCO - Daily Journal Cp"
  },
  {
    "value": "DLBL",
    "label": "DLBL - Barclays Bank Plc"
  },
  {
    "value": "DLBS",
    "label": "DLBS - Ipath Long Bond Bear"
  },
  {
    "value": "DLHC",
    "label": "DLHC - Dlh Holdings Corp"
  },
  {
    "value": "DLTH",
    "label": "DLTH - Duluth Hldg Cl B Cmn"
  },
  {
    "value": "DLTR",
    "label": "DLTR - Dollar Tree Inc"
  },
  {
    "value": "DMLP",
    "label": "DMLP - Dorchester Minls"
  },
  {
    "value": "DMPI",
    "label": "DMPI - Delmar Pharmaceuticals Inc"
  },
  {
    "value": "DMRC",
    "label": "DMRC - Digimarc Corporation"
  },
  {
    "value": "DMTX",
    "label": "DMTX - Dimension Thera Cmn"
  },
  {
    "value": "DNBF",
    "label": "DNBF - Dnb Finl Corp"
  },
  {
    "value": "DNKN",
    "label": "DNKN - Dunkin' Brands Group"
  },
  {
    "value": "DORM",
    "label": "DORM - Dorman Products Inc"
  },
  {
    "value": "DOX",
    "label": "DOX - Amdocs Ltd Ord"
  },
  {
    "value": "DPRX",
    "label": "DPRX - Dipexium Pharmaceuti"
  },
  {
    "value": "DRAD",
    "label": "DRAD - Digirad Corporation"
  },
  {
    "value": "DRAM",
    "label": "DRAM - Dataram Corp"
  },
  {
    "value": "DRIO",
    "label": "DRIO - Labstyle Innovat Cmn"
  },
  {
    "value": "DRIOW",
    "label": "DRIOW - Labstyle Innovati Wt"
  },
  {
    "value": "DRNA",
    "label": "DRNA - Dicerna Pharmaceutic"
  },
  {
    "value": "DRRX",
    "label": "DRRX - Durect Corporation"
  },
  {
    "value": "DRWI",
    "label": "DRWI - Dragonwave Cmn"
  },
  {
    "value": "DRYS",
    "label": "DRYS - Dryships Inc"
  },
  {
    "value": "DSGX",
    "label": "DSGX - Descartes Sys Grp"
  },
  {
    "value": "DSKE",
    "label": "DSKE - Daseke Inc"
  },
  {
    "value": "DSKEW",
    "label": "DSKEW - Daseke Inc"
  },
  {
    "value": "DSLV",
    "label": "DSLV - VS 3X Inv Silver"
  },
  {
    "value": "DSPG",
    "label": "DSPG - D S P Group Inc"
  },
  {
    "value": "DSWL",
    "label": "DSWL - Deswell Inds Inc"
  },
  {
    "value": "DTEA",
    "label": "DTEA - Davidstea Inc Cm Stk"
  },
  {
    "value": "DTRM",
    "label": "DTRM - Determine Inc"
  },
  {
    "value": "DTUL",
    "label": "DTUL - Ipath 2 Year Bull"
  },
  {
    "value": "DTUS",
    "label": "DTUS - Ipath 2 Year Bear"
  },
  {
    "value": "DTYL",
    "label": "DTYL - Ipath 10 Year Bull"
  },
  {
    "value": "DTYS",
    "label": "DTYS - Ipath 10 Year Bear"
  },
  {
    "value": "DUSA",
    "label": "DUSA - Davis Fundamental ETF Trust Davis Select U.S. Eq"
  },
  {
    "value": "DVAX",
    "label": "DVAX - Dynavax Technologies"
  },
  {
    "value": "DVCR",
    "label": "DVCR - Diversicare Healthca"
  },
  {
    "value": "DWAC",
    "label": "DWAC - Elkhorn Commodity Rotation Strategy ETF"
  },
  {
    "value": "DWAQ",
    "label": "DWAQ - Dynamic OTC Powershares"
  },
  {
    "value": "DWAS",
    "label": "DWAS - Powershares DWA Smallcap Momentum Portfolio"
  },
  {
    "value": "DWAT",
    "label": "DWAT - Arrow DWA Tactic ETF"
  },
  {
    "value": "DWCH",
    "label": "DWCH - Datawatch Cp"
  },
  {
    "value": "DWFI",
    "label": "DWFI - SPDR DWA Fi Allo ETF"
  },
  {
    "value": "DWIN",
    "label": "DWIN - PS DWA Tactical Multi-Asset Income"
  },
  {
    "value": "DWLD",
    "label": "DWLD - Davis Fundamental ETF Trust Davis Select Worldwi"
  },
  {
    "value": "DWLV",
    "label": "DWLV - Powershares DWA Momentum & Low Volatility Rotati"
  },
  {
    "value": "DWSN",
    "label": "DWSN - Dawson Geophscl Cmn"
  },
  {
    "value": "DWTR",
    "label": "DWTR - PS DWA Tactical Sector Rotation"
  },
  {
    "value": "DXCM",
    "label": "DXCM - Dexcom"
  },
  {
    "value": "DXGE",
    "label": "DXGE - Wisdomtree Gr Hdg Eq"
  },
  {
    "value": "DXJS",
    "label": "DXJS - Wisdomtree JP Hdg Fd"
  },
  {
    "value": "DXKW",
    "label": "DXKW - Wisdomtree Kor Hdg E"
  },
  {
    "value": "DXLG",
    "label": "DXLG - Destination XL Grp"
  },
  {
    "value": "DXPE",
    "label": "DXPE - Dxp Enterprise"
  },
  {
    "value": "DXPS",
    "label": "DXPS - Wisdomtree UK Hdg Fd"
  },
  {
    "value": "DXTR",
    "label": "DXTR - Dextera Surgical Inc"
  },
  {
    "value": "DXYN",
    "label": "DXYN - The Dixie Group"
  },
  {
    "value": "DYNT",
    "label": "DYNT - Dynatronics Cp"
  },
  {
    "value": "DYSL",
    "label": "DYSL - Dynasil Cp America"
  },
  {
    "value": "DZSI",
    "label": "DZSI - Dasan Zhone Solutions Inc"
  },
  {
    "value": "EA",
    "label": "EA - Electronic Arts Inc"
  },
  {
    "value": "EACQ",
    "label": "EACQ - Easterly Acq Cmn Stk"
  },
  {
    "value": "EACQU",
    "label": "EACQU - Easterly Acq Units"
  },
  {
    "value": "EACQW",
    "label": "EACQW - Easterly Acq Warrant"
  },
  {
    "value": "EAGL",
    "label": "EAGL - Double Eagle A Ords"
  },
  {
    "value": "EAGLU",
    "label": "EAGLU - Double Eagle Units"
  },
  {
    "value": "EAGLW",
    "label": "EAGLW - Double Eagle Warrant"
  },
  {
    "value": "EARS",
    "label": "EARS - Auris Medical Cmn"
  },
  {
    "value": "EBAY",
    "label": "EBAY - Ebay Inc"
  },
  {
    "value": "EBAYL",
    "label": "EBAYL - Ebay Inc 6.0% NTS"
  },
  {
    "value": "EBIO",
    "label": "EBIO - Eleven Bio Inc"
  },
  {
    "value": "EBIX",
    "label": "EBIX - Ebix Inc"
  },
  {
    "value": "EBMT",
    "label": "EBMT - Eagle Bancorp [Mt]"
  },
  {
    "value": "EBSB",
    "label": "EBSB - Meridian Bncp Cmn"
  },
  {
    "value": "EBTC",
    "label": "EBTC - Enterprise Bancorp I"
  },
  {
    "value": "ECHO",
    "label": "ECHO - Echo Global Logistic"
  },
  {
    "value": "ECOL",
    "label": "ECOL - US Ecology Inc"
  },
  {
    "value": "ECPG",
    "label": "ECPG - Encore Capital Grp"
  },
  {
    "value": "ECYT",
    "label": "ECYT - Endocyte Inc"
  },
  {
    "value": "EDAP",
    "label": "EDAP - Edap Tms Sa ADR"
  },
  {
    "value": "EDBI",
    "label": "EDBI - Legg Mason EM Div Cr"
  },
  {
    "value": "EDGE",
    "label": "EDGE - Edge Therapeut Cm S"
  },
  {
    "value": "EDGW",
    "label": "EDGW - Edgewater Tech Inc"
  },
  {
    "value": "EDIT",
    "label": "EDIT - Editas Medicine Cmn"
  },
  {
    "value": "EDUC",
    "label": "EDUC - Educational Dev Cp"
  },
  {
    "value": "EEFT",
    "label": "EEFT - Euronet Worldwide"
  },
  {
    "value": "EEI",
    "label": "EEI - Ecology Environment"
  },
  {
    "value": "EEMA",
    "label": "EEMA - Ishares MSCI EM Asia"
  },
  {
    "value": "EFAS",
    "label": "EFAS - Global X MSCI Superdividend EAFE ETF"
  },
  {
    "value": "EFII",
    "label": "EFII - Elec Imaging Inc"
  },
  {
    "value": "EFOI",
    "label": "EFOI - Energy Focus Cmn"
  },
  {
    "value": "EFSC",
    "label": "EFSC - Enterprises Finl Svc"
  },
  {
    "value": "EGAN",
    "label": "EGAN - Egain Corporation"
  },
  {
    "value": "EGBN",
    "label": "EGBN - Eagle Bancorp Inc"
  },
  {
    "value": "EGHT",
    "label": "EGHT - 8X8 Inc"
  },
  {
    "value": "EGLE",
    "label": "EGLE - Eagle Bulk Ship New"
  },
  {
    "value": "EGLT",
    "label": "EGLT - Egalet Corporation"
  },
  {
    "value": "EGOV",
    "label": "EGOV - Nic Inc"
  },
  {
    "value": "EGRX",
    "label": "EGRX - Eagle Pharmaceutical"
  },
  {
    "value": "EGT",
    "label": "EGT - Entertainment Gmg Cmn"
  },
  {
    "value": "EHTH",
    "label": "EHTH - Ehealth Inc"
  },
  {
    "value": "EIGI",
    "label": "EIGI - Endurance Int Grp"
  },
  {
    "value": "EIGR",
    "label": "EIGR - Eiger Biopharma"
  },
  {
    "value": "EKSO",
    "label": "EKSO - Ekso Bionics Holdings Inc"
  },
  {
    "value": "ELEC",
    "label": "ELEC - Electrum Special Or"
  },
  {
    "value": "ELECU",
    "label": "ELECU - Electrum Special Uts"
  },
  {
    "value": "ELECW",
    "label": "ELECW - Electrum Special Wt"
  },
  {
    "value": "ELGX",
    "label": "ELGX - Endologix Inc"
  },
  {
    "value": "ELON",
    "label": "ELON - Echelon Corporation"
  },
  {
    "value": "ELOS",
    "label": "ELOS - Syneron Medical Ltd"
  },
  {
    "value": "ELSE",
    "label": "ELSE - Electro Sensors In"
  },
  {
    "value": "ELTK",
    "label": "ELTK - E L T E K Ltd"
  },
  {
    "value": "EMCB",
    "label": "EMCB - Wisdomtree Emcb Fund"
  },
  {
    "value": "EMCF",
    "label": "EMCF - Emclaire Finl Cor"
  },
  {
    "value": "EMCG",
    "label": "EMCG - Wisdomtree EM Cnr Gr"
  },
  {
    "value": "EMCI",
    "label": "EMCI - E M C Insurance Gp"
  },
  {
    "value": "EMIF",
    "label": "EMIF - Ishares SP Emg Mk In"
  },
  {
    "value": "EMITF",
    "label": "EMITF - Elbit Imaging Ord"
  },
  {
    "value": "EMKR",
    "label": "EMKR - Emcore Corp"
  },
  {
    "value": "EML",
    "label": "EML - Eastern Co Cmn Stk"
  },
  {
    "value": "EMMS",
    "label": "EMMS - Emmis Commun Cl A"
  },
  {
    "value": "ENDP",
    "label": "ENDP - Endo Int'l Plc"
  },
  {
    "value": "ENFC",
    "label": "ENFC - Entegra Financ Cm ST"
  },
  {
    "value": "ENG",
    "label": "ENG - Englobal Corp"
  },
  {
    "value": "ENOC",
    "label": "ENOC - Enernoc Inc"
  },
  {
    "value": "ENPH",
    "label": "ENPH - Enphase Energy Inc"
  },
  {
    "value": "ENSG",
    "label": "ENSG - The Ensign Group In"
  },
  {
    "value": "ENT",
    "label": "ENT - Global Eagle Entrtn"
  },
  {
    "value": "ENTA",
    "label": "ENTA - Enanta Pharmaceutica"
  },
  {
    "value": "ENTG",
    "label": "ENTG - Entegris Inc"
  },
  {
    "value": "ENTL",
    "label": "ENTL - Entellus Medical Cmn"
  },
  {
    "value": "ENZL",
    "label": "ENZL - Ishares MSCI New Zea"
  },
  {
    "value": "ENZY",
    "label": "ENZY - Enzymotec Ltd"
  },
  {
    "value": "EPAY",
    "label": "EPAY - Bottomline Tech In"
  },
  {
    "value": "EPIX",
    "label": "EPIX - Essa Pharma Cmn"
  },
  {
    "value": "EPZM",
    "label": "EPZM - Epizyme Inc Cmn Stk"
  },
  {
    "value": "EQBK",
    "label": "EQBK - Equity Bncsrs Cm A"
  },
  {
    "value": "EQFN",
    "label": "EQFN - Equitable Fincl Cmn"
  },
  {
    "value": "EQIX",
    "label": "EQIX - Equinix Inc"
  },
  {
    "value": "ERI",
    "label": "ERI - Eldorado Resorts Cmn"
  },
  {
    "value": "ERIC",
    "label": "ERIC - Ericsson ADR"
  },
  {
    "value": "ERIE",
    "label": "ERIE - Erie Indemnity Co"
  },
  {
    "value": "ERII",
    "label": "ERII - Energy Recovery Inc"
  },
  {
    "value": "ERS",
    "label": "ERS - Empire Res Inc"
  },
  {
    "value": "ESBK",
    "label": "ESBK - Elmira Sav Bk"
  },
  {
    "value": "ESCA",
    "label": "ESCA - Escalade Inc"
  },
  {
    "value": "ESEA",
    "label": "ESEA - Euroseas Ltd"
  },
  {
    "value": "ESES",
    "label": "ESES - Eco-Stim Energy Cmn"
  },
  {
    "value": "ESG",
    "label": "ESG - Flexshares Stoxx US ESG Impact Index"
  },
  {
    "value": "ESGD",
    "label": "ESGD - Ishares MSCI EAFE ESG Select Et"
  },
  {
    "value": "ESGE",
    "label": "ESGE - Ishares MSCI EM ESG Select ETF"
  },
  {
    "value": "ESGG",
    "label": "ESGG - Flexshares Stoxx Global ESG Impact Index"
  },
  {
    "value": "ESGR",
    "label": "ESGR - Enstar Group Limited"
  },
  {
    "value": "ESGU",
    "label": "ESGU - Ishares MSCI USA ESG Optimized ETF"
  },
  {
    "value": "ESIO",
    "label": "ESIO - Electro Sci Inds"
  },
  {
    "value": "ESLT",
    "label": "ESLT - Elbit Systems Ltd"
  },
  {
    "value": "ESND",
    "label": "ESND - Essendant Inc"
  },
  {
    "value": "ESPR",
    "label": "ESPR - Esperion Theraptc Cmn"
  },
  {
    "value": "ESRX",
    "label": "ESRX - Express Scripts"
  },
  {
    "value": "ESSA",
    "label": "ESSA - Essa Bancorp Inc"
  },
  {
    "value": "ESXB",
    "label": "ESXB - Community Bankers Cmn"
  },
  {
    "value": "ETFC",
    "label": "ETFC - E*Trade Finl Corp"
  },
  {
    "value": "ETRM",
    "label": "ETRM - Enteromedics Inc"
  },
  {
    "value": "ETSY",
    "label": "ETSY - Etsy Inc"
  },
  {
    "value": "EUFN",
    "label": "EUFN - Ishares MSCI EUR Fin"
  },
  {
    "value": "EVAR",
    "label": "EVAR - Lombard Medical Ord"
  },
  {
    "value": "EVBG",
    "label": "EVBG - Everbridge Inc"
  },
  {
    "value": "EVBS",
    "label": "EVBS - Eastern Va Bkshs"
  },
  {
    "value": "EVEP",
    "label": "EVEP - Ev Energy Partners"
  },
  {
    "value": "EVGBC",
    "label": "EVGBC - Eaton Vnce Gbl Inc"
  },
  {
    "value": "EVGN",
    "label": "EVGN - Evogene Ltd Ord"
  },
  {
    "value": "EVK",
    "label": "EVK - Ever Glory Intl Grp"
  },
  {
    "value": "EVLMC",
    "label": "EVLMC - Eaton Vnce Tabs 5-15"
  },
  {
    "value": "EVLV",
    "label": "EVLV - Evine Live Cl A"
  },
  {
    "value": "EVOK",
    "label": "EVOK - Evoke Pharma Cmn"
  },
  {
    "value": "EVOL",
    "label": "EVOL - Evolving Systems Inc"
  },
  {
    "value": "EVSTC",
    "label": "EVSTC - Eton Vnce Stck Nxtsh"
  },
  {
    "value": "EWBC",
    "label": "EWBC - East West Bancorp"
  },
  {
    "value": "EWZS",
    "label": "EWZS - Ishares MSCI Brazil"
  },
  {
    "value": "EXA",
    "label": "EXA - Exa Corporation"
  },
  {
    "value": "EXAC",
    "label": "EXAC - Exactech Inc"
  },
  {
    "value": "EXAS",
    "label": "EXAS - Exact Sciences Cor"
  },
  {
    "value": "EXEL",
    "label": "EXEL - Exelixis Inc"
  },
  {
    "value": "EXFO",
    "label": "EXFO - Exfo Inc"
  },
  {
    "value": "EXLS",
    "label": "EXLS - Exlservice Holdings"
  },
  {
    "value": "EXPD",
    "label": "EXPD - Expeditors Intl"
  },
  {
    "value": "EXPE",
    "label": "EXPE - Expedia Inc"
  },
  {
    "value": "EXPO",
    "label": "EXPO - Exponent Inc"
  },
  {
    "value": "EXTR",
    "label": "EXTR - Extreme Networks"
  },
  {
    "value": "EXXI",
    "label": "EXXI - Energy Xxi Gulf Coast Inc"
  },
  {
    "value": "EYEG",
    "label": "EYEG - Eyegate Pharma Cmn"
  },
  {
    "value": "EYEGW",
    "label": "EYEGW - Eyegate Pharm Wts"
  },
  {
    "value": "EYES",
    "label": "EYES - Second Sight Cmn"
  },
  {
    "value": "EYESW",
    "label": "EYESW - Second Sight Medical Products Inc. Warrants"
  },
  {
    "value": "EZPW",
    "label": "EZPW - Ezcorp Inc"
  },
  {
    "value": "FAAR",
    "label": "FAAR - FT Alt Ab Ret ST ETF"
  },
  {
    "value": "FAB",
    "label": "FAB - First TR ML CA Alpha"
  },
  {
    "value": "FAD",
    "label": "FAD - First TR ML Cp Gr Al"
  },
  {
    "value": "FALC",
    "label": "FALC - Falconstor Sftwr"
  },
  {
    "value": "FALN",
    "label": "FALN - Ishares Fallen Angels USD Bond"
  },
  {
    "value": "FANG",
    "label": "FANG - Diamondback Energy"
  },
  {
    "value": "FANH",
    "label": "FANH - Fanhua Inc"
  },
  {
    "value": "FARM",
    "label": "FARM - Farmer Brothers"
  },
  {
    "value": "FARO",
    "label": "FARO - Faro Tech Inc"
  },
  {
    "value": "FAST",
    "label": "FAST - Fastenal Co"
  },
  {
    "value": "FATE",
    "label": "FATE - Fate Therapeutics Cmn"
  },
  {
    "value": "FB",
    "label": "FB - Facebook Inc"
  },
  {
    "value": "FBIO",
    "label": "FBIO - Fortress Biotech Inc"
  },
  {
    "value": "FBIZ",
    "label": "FBIZ - First Business Finan"
  },
  {
    "value": "FBMS",
    "label": "FBMS - First Bancshs [Ms]"
  },
  {
    "value": "FBNC",
    "label": "FBNC - First Bancorp [Nc]"
  },
  {
    "value": "FBNK",
    "label": "FBNK - First Connecticut BA"
  },
  {
    "value": "FBRC",
    "label": "FBRC - Fbr & Co."
  },
  {
    "value": "FBSS",
    "label": "FBSS - Fauquier Bankshares"
  },
  {
    "value": "FBZ",
    "label": "FBZ - FT Brazil Alphadex"
  },
  {
    "value": "FCA",
    "label": "FCA - FT China Alphadex"
  },
  {
    "value": "FCAN",
    "label": "FCAN - FT Canada Alphadex"
  },
  {
    "value": "FCAP",
    "label": "FCAP - First Capital Inc"
  },
  {
    "value": "FCBC",
    "label": "FCBC - First Community Bksh"
  },
  {
    "value": "FCCO",
    "label": "FCCO - First Community Corp"
  },
  {
    "value": "FCCY",
    "label": "FCCY - 1St Constitution Bcp"
  },
  {
    "value": "FCEF",
    "label": "FCEF - First Trust CEF Income Opportunity ETF"
  },
  {
    "value": "FCEL",
    "label": "FCEL - Fuelcell Energy Inc"
  },
  {
    "value": "FCFP",
    "label": "FCFP - First Comty Fncl Cmn"
  },
  {
    "value": "FCNCA",
    "label": "FCNCA - First Citizens Bancs"
  },
  {
    "value": "FCSC",
    "label": "FCSC - Fibrocell Science Cmn"
  },
  {
    "value": "FCVT",
    "label": "FCVT - First TR Strategic C"
  },
  {
    "value": "FDEF",
    "label": "FDEF - First Defiance Finl"
  },
  {
    "value": "FDIV",
    "label": "FDIV - First Trust ETF IV"
  },
  {
    "value": "FDT",
    "label": "FDT - FT Dev Mkts Exus A D"
  },
  {
    "value": "FDTS",
    "label": "FDTS - FT Dv Mkts Exus Smcp"
  },
  {
    "value": "FDUS",
    "label": "FDUS - Fidus Investment Cor"
  },
  {
    "value": "FEIM",
    "label": "FEIM - Frequency Elcts Inc"
  },
  {
    "value": "FELE",
    "label": "FELE - Franklin Electric Co"
  },
  {
    "value": "FEM",
    "label": "FEM - FT EM Mkts Alphadex"
  },
  {
    "value": "FEMB",
    "label": "FEMB - First TR Emrg Bd ETF"
  },
  {
    "value": "FEMS",
    "label": "FEMS - FT Dv Mkt Sm Cap A D"
  },
  {
    "value": "FENX",
    "label": "FENX - Fenix Parts Inc Cmn"
  },
  {
    "value": "FEP",
    "label": "FEP - FT Europe Alphadex"
  },
  {
    "value": "FEUZ",
    "label": "FEUZ - First TR Erzne Alphdx"
  },
  {
    "value": "FEX",
    "label": "FEX - First TR Lg Cp Alpha"
  },
  {
    "value": "FEYE",
    "label": "FEYE - Fireeye Inc"
  },
  {
    "value": "FFBC",
    "label": "FFBC - First Finl Bncp [Oh]"
  },
  {
    "value": "FFHL",
    "label": "FFHL - Fuwei Films [Holding"
  },
  {
    "value": "FFIC",
    "label": "FFIC - Flushing Finl Corp"
  },
  {
    "value": "FFIN",
    "label": "FFIN - First Finl Bkshs Inc"
  },
  {
    "value": "FFIV",
    "label": "FFIV - F5 Networks Inc"
  },
  {
    "value": "FFKT",
    "label": "FFKT - Farmers Capital BA"
  },
  {
    "value": "FFNW",
    "label": "FFNW - First Financial Nort"
  },
  {
    "value": "FFWM",
    "label": "FFWM - First Foundation Cmn"
  },
  {
    "value": "FGBI",
    "label": "FGBI - First Gurty Banc Cmn"
  },
  {
    "value": "FGEN",
    "label": "FGEN - Fibrogen Inc CS"
  },
  {
    "value": "FGM",
    "label": "FGM - FT Germany Alphadex"
  },
  {
    "value": "FH",
    "label": "FH - Form Holdings Cp"
  },
  {
    "value": "FHB",
    "label": "FHB - First Hawaiian Inc Cmn"
  },
  {
    "value": "FHCO",
    "label": "FHCO - Female Health Co"
  },
  {
    "value": "FHK",
    "label": "FHK - FT Hong Hong Alphadex"
  },
  {
    "value": "FIBK",
    "label": "FIBK - First Interstate Ban"
  },
  {
    "value": "FINL",
    "label": "FINL - Finish Line Cl A"
  },
  {
    "value": "FINQ",
    "label": "FINQ - Purefunds Solactive Fintech ETF"
  },
  {
    "value": "FINX",
    "label": "FINX - Global X Fintech Thematic ETF"
  },
  {
    "value": "FISI",
    "label": "FISI - Financial Institut"
  },
  {
    "value": "FISV",
    "label": "FISV - Fiserv Inc"
  },
  {
    "value": "FITB",
    "label": "FITB - Fifth Third Bncp"
  },
  {
    "value": "FITBI",
    "label": "FITBI - Fifth Third Bancorp"
  },
  {
    "value": "FITS",
    "label": "FITS - The Health and Fitness ETF"
  },
  {
    "value": "FIVE",
    "label": "FIVE - Five Below Inc"
  },
  {
    "value": "FIVN",
    "label": "FIVN - Five9 Inc Cmn"
  },
  {
    "value": "FIXD",
    "label": "FIXD - First Trust Exchange-Traded Fund ViII First Trus"
  },
  {
    "value": "FIZZ",
    "label": "FIZZ - Natl Beverage Cp"
  },
  {
    "value": "FJP",
    "label": "FJP - First TR Japan Alpdx"
  },
  {
    "value": "FKO",
    "label": "FKO - FT South Korea Alphadex"
  },
  {
    "value": "FKU",
    "label": "FKU - FT UK Alphadex"
  },
  {
    "value": "FLAG",
    "label": "FLAG - Weatherstorm Forensi"
  },
  {
    "value": "FLAT",
    "label": "FLAT - Ipath Flattener"
  },
  {
    "value": "FLDM",
    "label": "FLDM - Fluidigm Corporation"
  },
  {
    "value": "FLEX",
    "label": "FLEX - Flextronics Intl Ltd"
  },
  {
    "value": "FLGT",
    "label": "FLGT - Fulgent Genetics Inc"
  },
  {
    "value": "FLIC",
    "label": "FLIC - First of Long Isla"
  },
  {
    "value": "FLIR",
    "label": "FLIR - Flir Systems Inc"
  },
  {
    "value": "FLKS",
    "label": "FLKS - Flex Pharma Inc Cmn"
  },
  {
    "value": "FLL",
    "label": "FLL - Full House Rsts Cmn"
  },
  {
    "value": "FLN",
    "label": "FLN - FT Latin Am Alphadex"
  },
  {
    "value": "FLWS",
    "label": "FLWS - 1-800-Flowers.Com"
  },
  {
    "value": "FLXN",
    "label": "FLXN - Flexion Therapeutics"
  },
  {
    "value": "FLXS",
    "label": "FLXS - Flexsteel Inds"
  },
  {
    "value": "FMB",
    "label": "FMB - First Trust ETF III"
  },
  {
    "value": "FMBH",
    "label": "FMBH - First Mid Ill Bncshr"
  },
  {
    "value": "FMBI",
    "label": "FMBI - First Midwest Bncp"
  },
  {
    "value": "FMI",
    "label": "FMI - Foundation Medicine"
  },
  {
    "value": "FMK",
    "label": "FMK - First TR Mega Cp Alp"
  },
  {
    "value": "FMNB",
    "label": "FMNB - Farmers Natl Banc Cp"
  },
  {
    "value": "FNBC",
    "label": "FNBC - First Nbc Bank Holdi"
  },
  {
    "value": "FNCX",
    "label": "FNCX - Function[X] Inc"
  },
  {
    "value": "FNGN",
    "label": "FNGN - Financial Engines Cmn"
  },
  {
    "value": "FNHC",
    "label": "FNHC - Federated Natl Hldg"
  },
  {
    "value": "FNJN",
    "label": "FNJN - Finjan Holdings Cmn"
  },
  {
    "value": "FNK",
    "label": "FNK - First TR MD Cp Vl Al"
  },
  {
    "value": "FNLC",
    "label": "FNLC - First Bancorp Inc"
  },
  {
    "value": "FNSR",
    "label": "FNSR - Finisar Corp"
  },
  {
    "value": "FNTE",
    "label": "FNTE - Fintech Acquisition Corp. II"
  },
  {
    "value": "FNTEU",
    "label": "FNTEU - Fintech Acquisition Corp. II Unit"
  },
  {
    "value": "FNTEW",
    "label": "FNTEW - Fintech Acquisition Corp. II Warrant"
  },
  {
    "value": "FNWB",
    "label": "FNWB - First Nw Banc Cmn"
  },
  {
    "value": "FNX",
    "label": "FNX - First Trust Mid Cap"
  },
  {
    "value": "FNY",
    "label": "FNY - First TR Mid Cp Alph"
  },
  {
    "value": "FOANC",
    "label": "FOANC - Gabelli Nextshares Trust Gabelli Food"
  },
  {
    "value": "FOGO",
    "label": "FOGO - Fogo De Chao Cm ST"
  },
  {
    "value": "FOLD",
    "label": "FOLD - Amicus Therapeutics"
  },
  {
    "value": "FOMX",
    "label": "FOMX - Foamix Pharma Ord"
  },
  {
    "value": "FONE",
    "label": "FONE - First Trust Ndq Smtph"
  },
  {
    "value": "FONR",
    "label": "FONR - Fonar Corp"
  },
  {
    "value": "FORD",
    "label": "FORD - Forward Inds Inc"
  },
  {
    "value": "FORK",
    "label": "FORK - Fuling Global Ord Sh"
  },
  {
    "value": "FORM",
    "label": "FORM - Formfactor Inc"
  },
  {
    "value": "FORR",
    "label": "FORR - Forrester Resrch"
  },
  {
    "value": "FORTY",
    "label": "FORTY - Formula Sys [1985]"
  },
  {
    "value": "FOSL",
    "label": "FOSL - Fossil Group Cmn Stk"
  },
  {
    "value": "FOX",
    "label": "FOX - 21St Centry Fox Class B"
  },
  {
    "value": "FOXA",
    "label": "FOXA - 21St Centry Fox Class A"
  },
  {
    "value": "FOXF",
    "label": "- Fox Factory Cp Cmn"
  },
  {
    "value": "FPA",
    "label": "FPA - FT Asia Pac Ex Japan"
  },
  {
    "value": "FPAY",
    "label": "FPAY - Flexshopper Inc"
  },
  {
    "value": "FPRX",
    "label": "FPRX - Five Prime Thera Cmn"
  },
  {
    "value": "FPXI",
    "label": "FPXI - First TR Itl Ipo ETF"
  },
  {
    "value": "FRAN",
    "label": "FRAN - Francesca's Holdings"
  },
  {
    "value": "FRBA",
    "label": "FRBA - First Bank Cmn"
  },
  {
    "value": "FRBK",
    "label": "FRBK - Republic First Bcp"
  },
  {
    "value": "FRED",
    "label": "FRED - Fred's Inc"
  },
  {
    "value": "FRGI",
    "label": "FRGI - Fiesta Restaurant Gp"
  },
  {
    "value": "FRME",
    "label": "FRME - First Merchants Corp"
  },
  {
    "value": "FRP",
    "label": "FRP - Fairpoint Communicat"
  },
  {
    "value": "FRPH",
    "label": "FRPH - Frp Holdings Inc"
  },
  {
    "value": "FRPT",
    "label": "FRPT - Freshpet Inc CS"
  },
  {
    "value": "FRSH",
    "label": "FRSH - Papa Murphys Hld Com"
  },
  {
    "value": "FRTA",
    "label": "FRTA - Forterra Inc"
  },
  {
    "value": "FSAM",
    "label": "FSAM - Fifth Street Cmn"
  },
  {
    "value": "FSBC",
    "label": "FSBC - Fsb Community Bnksh"
  },
  {
    "value": "FSBK",
    "label": "FSBK - First South Bncp Inc"
  },
  {
    "value": "FSBW",
    "label": "FSBW - FS Bancorp Inc"
  },
  {
    "value": "FSC",
    "label": "FSC - Fifth Street Finance"
  },
  {
    "value": "FSCFL",
    "label": "FSCFL - Fth ST Fin 6.125 Sn"
  },
  {
    "value": "FSFG",
    "label": "FSFG - First Savings Financ"
  },
  {
    "value": "FSFR",
    "label": "FSFR - Fifth Strt Snr Flt"
  },
  {
    "value": "FSLR",
    "label": "FSLR - First Solar Inc"
  },
  {
    "value": "FSNN",
    "label": "FSNN - Fusion Telecom Intl"
  },
  {
    "value": "FSTR",
    "label": "FSTR - Foster L B Co"
  },
  {
    "value": "FSV",
    "label": "FSV - Firstsrvce Sub Vt Sh"
  },
  {
    "value": "FSZ",
    "label": "FSZ - FT Switzerland Alphadex"
  },
  {
    "value": "FTA",
    "label": "FTA - First TR Lr CA Alpha"
  },
  {
    "value": "FTAG",
    "label": "FTAG - First TR Indxx Gl Ag"
  },
  {
    "value": "FTC",
    "label": "FTC - First Trust Large CA"
  },
  {
    "value": "FTCS",
    "label": "FTCS - First Trust Capital"
  },
  {
    "value": "FTD",
    "label": "FTD - Ftd Companies"
  },
  {
    "value": "FTEK",
    "label": "FTEK - Fuel Tech Inc"
  },
  {
    "value": "FTEO",
    "label": "FTEO - Fronteo Inc"
  },
  {
    "value": "FTGC",
    "label": "FTGC - First Trust Glb Tc Cmn"
  },
  {
    "value": "FTHI",
    "label": "FTHI - First Trust Exchange"
  },
  {
    "value": "FTLB",
    "label": "FTLB - First Trust ETF Vi"
  },
  {
    "value": "FTNT",
    "label": "FTNT - Fortinet Inc"
  },
  {
    "value": "FTR",
    "label": "FTR - Frontier Commun Cp"
  },
  {
    "value": "FTRI",
    "label": "FTRI - First TR Indxx Glb N"
  },
  {
    "value": "FTRPR",
    "label": "FTRPR - Frontier A Mn Cnv Pd"
  },
  {
    "value": "FTSL",
    "label": "FTSL - First TR Snr Ln ETF"
  },
  {
    "value": "FTSM",
    "label": "FTSM - First Trust ETF IV"
  },
  {
    "value": "FTW",
    "label": "FTW - FT Hk Alphadex"
  },
  {
    "value": "FTXD",
    "label": "FTXD - First Trust Nasdaq Retail ETF"
  },
  {
    "value": "FTXG",
    "label": "FTXG - First Trust Nasdaq Food & Beverage ETF"
  },
  {
    "value": "FTXH",
    "label": "FTXH - First Trust Nasdaq Pharmaceuticals ETF"
  },
  {
    "value": "FTXL",
    "label": "FTXL - First Trust Nasdaq Semiconductor ETF"
  },
  {
    "value": "FTXN",
    "label": "FTXN - First Trust Nasdaq Oil & Gas ETF"
  },
  {
    "value": "FTXO",
    "label": "FTXO - First Trust Nasdaq Bank ETF"
  },
  {
    "value": "FTXR",
    "label": "FTXR - First Trust Nasdaq Transportation ETF"
  },
  {
    "value": "FUEL",
    "label": "FUEL - Rocket Fuel Inc"
  },
  {
    "value": "FULLL",
    "label": "FULLL - Full Circle Cp Sr Nt"
  },
  {
    "value": "FULT",
    "label": "FULT - Fulton Financial Cor"
  },
  {
    "value": "FUNC",
    "label": "FUNC - First United Corp"
  },
  {
    "value": "FUND",
    "label": "FUND - Sprott Focus Trust"
  },
  {
    "value": "FUSB",
    "label": "FUSB - First US Bancshares Inc"
  },
  {
    "value": "FV",
    "label": "FV - First Trust ETF Vi"
  },
  {
    "value": "FVC",
    "label": "FVC - FT DWA Dyn Foc 5 ETF"
  },
  {
    "value": "FVE",
    "label": "FVE - Five Star Quality Care"
  },
  {
    "value": "FWONA",
    "label": "FWONA - Liberty Media F1 Series A"
  },
  {
    "value": "FWONK",
    "label": "FWONK - Liberty Media F1 Series K"
  },
  {
    "value": "FWP",
    "label": "FWP - Forward Pharma Ads"
  },
  {
    "value": "FWRD",
    "label": "FWRD - Foward Air Corp"
  },
  {
    "value": "FYC",
    "label": "FYC - First Trust Small CA"
  },
  {
    "value": "FYT",
    "label": "FYT - First TR Sm Cp Alpha"
  },
  {
    "value": "FYX",
    "label": "FYX - First TR Sm Cr Alpha"
  },
  {
    "value": "GABC",
    "label": "GABC - German Amer Bncp Inc"
  },
  {
    "value": "GAIA",
    "label": "GAIA - Gaiam Inc"
  },
  {
    "value": "GAIN",
    "label": "GAIN - Gladstone Investment"
  },
  {
    "value": "GAINM",
    "label": "GAINM - Gladstone Investment Corp"
  },
  {
    "value": "GAINN",
    "label": "GAINN - Gladstone Inv 6.5 C"
  },
  {
    "value": "GAINO",
    "label": "GAINO - Gladstone Invt Corp"
  },
  {
    "value": "GALE",
    "label": "GALE - Galena Biopharma In"
  },
  {
    "value": "GALT",
    "label": "GALT - Galectin Therapeutic"
  },
  {
    "value": "GALTU",
    "label": "GALTU - Galectin Therapeutics Inc"
  },
  {
    "value": "GALTW",
    "label": "GALTW - Galectin Therap Wts"
  },
  {
    "value": "GARS",
    "label": "GARS - Garrison Capital Inc"
  },
  {
    "value": "GASS",
    "label": "GASS - Stealthgas Inc"
  },
  {
    "value": "GBCI",
    "label": "GBCI - Glacier Bancorp Inc"
  },
  {
    "value": "GBDC",
    "label": "GBDC - Golub Capital Bdc I"
  },
  {
    "value": "GBLI",
    "label": "GBLI - Global Indemnity Plc"
  },
  {
    "value": "GBLIZ",
    "label": "GBLIZ - Global Indmnty 7.75"
  },
  {
    "value": "GBNK",
    "label": "GBNK - Guaranty Bancorp"
  },
  {
    "value": "GBT",
    "label": "GBT - Global Blood Ther Cmn"
  },
  {
    "value": "GCBC",
    "label": "GCBC - Greene County Bncp"
  },
  {
    "value": "GCVRZ",
    "label": "GCVRZ - Sanofi Cvr"
  },
  {
    "value": "GDEN",
    "label": "GDEN - Golden Entmt Cmn"
  },
  {
    "value": "GDS",
    "label": "GDS - Gds Holdings Ltd"
  },
  {
    "value": "GEC",
    "label": "GEC - Great Elm Capital Group Inc"
  },
  {
    "value": "GECC",
    "label": "GECC - Great Elm Capital Corp"
  },
  {
    "value": "GEMP",
    "label": "GEMP - Gemphire Therapeutics Inc"
  },
  {
    "value": "GENC",
    "label": "GENC - Gencor Industries In"
  },
  {
    "value": "GENE",
    "label": "GENE - Genetic Tech Spn Ads"
  },
  {
    "value": "GENY",
    "label": "GENY - Principal Millennials Index ETF"
  },
  {
    "value": "GEOS",
    "label": "GEOS - Geospace Technologie"
  },
  {
    "value": "GERN",
    "label": "GERN - Geron Corporation"
  },
  {
    "value": "GEVO",
    "label": "GEVO - Gevo Inc Cmn Stk"
  },
  {
    "value": "GFED",
    "label": "GFED - Guaranty Fedl Bcshs"
  },
  {
    "value": "GFN",
    "label": "GFN - General Finance Corp"
  },
  {
    "value": "GFNCP",
    "label": "GFNCP - General Fn Cum Pfd C"
  },
  {
    "value": "GFNSL",
    "label": "GFNSL - Genrl Fin Sr Nt 2021"
  },
  {
    "value": "GGAL",
    "label": "GGAL - Grupo Fin Galicia"
  },
  {
    "value": "GHDX",
    "label": "GHDX - Genomic Health Inc"
  },
  {
    "value": "GIFI",
    "label": "GIFI - Gulf Island Fab"
  },
  {
    "value": "GIGA",
    "label": "GIGA - Giga Tronics Inc"
  },
  {
    "value": "GIGM",
    "label": "GIGM - Gigamedia Limited"
  },
  {
    "value": "GIII",
    "label": "GIII - G-III Apparel Gp I"
  },
  {
    "value": "GILD",
    "label": "GILD - Gilead Sciences Inc"
  },
  {
    "value": "GILT",
    "label": "GILT - Gilat Satellite Ntwk"
  },
  {
    "value": "GK",
    "label": "GK - G K Svcs Inc Cl A"
  },
  {
    "value": "GLAD",
    "label": "GLAD - Gladstone Cap Corp"
  },
  {
    "value": "GLADO",
    "label": "GLADO - Gladstone 6.75 Srs"
  },
  {
    "value": "GLBL",
    "label": "GLBL - Terraform Glbl Cla"
  },
  {
    "value": "GLBR",
    "label": "GLBR - Global Brokerage Inc"
  },
  {
    "value": "GLBS",
    "label": "GLBS - Globus Maritime Limi"
  },
  {
    "value": "GLBZ",
    "label": "GLBZ - Glen Burnie Bancorp"
  },
  {
    "value": "GLDD",
    "label": "GLDD - Great Lakes Drg Dock"
  },
  {
    "value": "GLDI",
    "label": "GLDI - CS X-Links Gld Share"
  },
  {
    "value": "GLMD",
    "label": "GLMD - Galmed Pharmaceutica"
  },
  {
    "value": "GLNG",
    "label": "GLNG - Golar Lng Ltd"
  },
  {
    "value": "GLPG",
    "label": "GLPG - Galapagos Nv"
  },
  {
    "value": "GLPI",
    "label": "GLPI - Gaming & Leisure"
  },
  {
    "value": "GLRE",
    "label": "GLRE - Greenlight Cap. Re."
  },
  {
    "value": "GLUU",
    "label": "GLUU - Glu Mobile Inc"
  },
  {
    "value": "GLYC",
    "label": "GLYC - Glycomimetics Inc"
  },
  {
    "value": "GMAN",
    "label": "GMAN - Gordmans Stores Inc"
  },
  {
    "value": "GMLP",
    "label": "GMLP - Golar Lng Partners"
  },
  {
    "value": "GNBC",
    "label": "GNBC - Green Bancorp Cmn"
  },
  {
    "value": "GNCA",
    "label": "GNCA - Genocea Biosciences"
  },
  {
    "value": "GNCMA",
    "label": "GNCMA - Gen Communication"
  },
  {
    "value": "GNMA",
    "label": "GNMA - Ishares GNMA Bd ETF"
  },
  {
    "value": "GNMK",
    "label": "GNMK - Genmark Diagnostics"
  },
  {
    "value": "GNMX",
    "label": "GNMX - Aevi Genomic Medicine"
  },
  {
    "value": "GNRX",
    "label": "GNRX - Vaneck Vectors Gener"
  },
  {
    "value": "GNTX",
    "label": "GNTX - Gentex Corp"
  },
  {
    "value": "GNUS",
    "label": "GNUS - Genius Brands International Inc"
  },
  {
    "value": "GNVC",
    "label": "GNVC - Genvec Inc"
  },
  {
    "value": "GOGL",
    "label": "GOGL - Golden Ocean Gp Cmn"
  },
  {
    "value": "GOGO",
    "label": "GOGO - Gogo Inc Cmn Stk"
  },
  {
    "value": "GOLD",
    "label": "GOLD - Randgold Res Ltd"
  },
  {
    "value": "GOOD",
    "label": "GOOD - Gladstone Comml"
  },
  {
    "value": "GOODM",
    "label": "GOODM - Gladstone Commercial Corporatio"
  },
  {
    "value": "GOODO",
    "label": "GOODO - Gladstone Commercial"
  },
  {
    "value": "GOODP",
    "label": "GOODP - Gladstone Commercia"
  },
  {
    "value": "GOOG",
    "label": "GOOG - Alphabet Class C"
  },
  {
    "value": "GOOGL",
    "label": "GOOGL - Alphabet Class A"
  },
  {
    "value": "GOV",
    "label": "GOV - Government Properties Income Trust"
  },
  {
    "value": "GOVNI",
    "label": "GOVNI - Government Properties Income TR"
  },
  {
    "value": "GPAC",
    "label": "GPAC - Global Ptnr Acq Com"
  },
  {
    "value": "GPACU",
    "label": "GPACU - Global Partner Units"
  },
  {
    "value": "GPACW",
    "label": "GPACW - Global Ptnr Acq Wrt"
  },
  {
    "value": "GPIA",
    "label": "GPIA - Gp Invstmts Aq Ord"
  },
  {
    "value": "GPIAU",
    "label": "GPIAU - Gp Investments Unit"
  },
  {
    "value": "GPIAW",
    "label": "GPIAW - Gp Investments Aq Wt"
  },
  {
    "value": "GPIC",
    "label": "GPIC - Gaming Partners Intl"
  },
  {
    "value": "GPOR",
    "label": "GPOR - Gulfport Energy Corp"
  },
  {
    "value": "GPP",
    "label": "GPP - Green Plains Partners LP"
  },
  {
    "value": "GPRE",
    "label": "GPRE - Green Plains Inc Cmn"
  },
  {
    "value": "GPRO",
    "label": "GPRO - Gopro Inc Cl A Cmn"
  },
  {
    "value": "GRBK",
    "label": "GRBK - Green Brick Partners"
  },
  {
    "value": "GRFS",
    "label": "GRFS - Grifols S.A."
  },
  {
    "value": "GRID",
    "label": "GRID - First Trust Nq Ce Smgrid"
  },
  {
    "value": "GRIF",
    "label": "GRIF - Griffin Industrial"
  },
  {
    "value": "GRMN",
    "label": "GRMN - Garmin Ltd"
  },
  {
    "value": "GROW",
    "label": "GROW - U S Global Inv Inc"
  },
  {
    "value": "GRPN",
    "label": "GRPN - Groupon Cl A Cmn"
  },
  {
    "value": "GRVY",
    "label": "GRVY - Gravity Co. Ltd"
  },
  {
    "value": "GSBC",
    "label": "GSBC - Great Southern Bncp"
  },
  {
    "value": "GSHT",
    "label": "GSHT - Gores Holdings II Inc. Class A Common Stock"
  },
  {
    "value": "GSHTU",
    "label": "GSHTU - Gores Holdings II Inc. Units"
  },
  {
    "value": "GSHTW",
    "label": "GSHTW - Gores Holdings II Inc. Warrants"
  },
  {
    "value": "GSIT",
    "label": "GSIT - Gsi Technology Inc"
  },
  {
    "value": "GSM",
    "label": "GSM - Ferroglobe Plc Os"
  },
  {
    "value": "GSOL",
    "label": "GSOL - Global Sources Ltd"
  },
  {
    "value": "GSUM",
    "label": "GSUM - Gridsum Holding Inc"
  },
  {
    "value": "GSVC",
    "label": "GSVC - Gsv Capital Cp Cmn"
  },
  {
    "value": "GT",
    "label": "GT - Goodyear Tire Rubber"
  },
  {
    "value": "GTIM",
    "label": "GTIM - Good Times Rest"
  },
  {
    "value": "GTLS",
    "label": "GTLS - Chart Industries In"
  },
  {
    "value": "GTWN",
    "label": "GTWN - Georgetown Bancp Cmn"
  },
  {
    "value": "GTXI",
    "label": "GTXI - GTX Inc"
  },
  {
    "value": "GTYH",
    "label": "GTYH - Gty Technology Holdings Inc"
  },
  {
    "value": "GTYHU",
    "label": "GTYHU - Gty Technology Holdings Inc"
  },
  {
    "value": "GTYHW",
    "label": "GTYHW - Gty Technology Holdings Inc. Warrants"
  },
  {
    "value": "GUID",
    "label": "GUID - Guidance Software"
  },
  {
    "value": "GULF",
    "label": "GULF - Wisdomtree"
  },
  {
    "value": "GURE",
    "label": "GURE - Gulf Resources Inc"
  },
  {
    "value": "GWGH",
    "label": "GWGH - Gwg Holdings Com Stk"
  },
  {
    "value": "GWPH",
    "label": "GWPH - Gw Pharma ADR"
  },
  {
    "value": "GWRS",
    "label": "GWRS - Global Water Reso Cmn"
  },
  {
    "value": "GYRO",
    "label": "GYRO - Gyrodyne Llc Cmn"
  },
  {
    "value": "HA",
    "label": "HA - Hawaiian Hldgs Inc"
  },
  {
    "value": "HABT",
    "label": "HABT - Habit Rest Cmn A"
  },
  {
    "value": "HAFC",
    "label": "HAFC - Hanmi Financial Cp"
  },
  {
    "value": "HAIN",
    "label": "HAIN - Hain Celestial Grp"
  },
  {
    "value": "HALL",
    "label": "HALL - Hallmark Fin Svc"
  },
  {
    "value": "HALO",
    "label": "HALO - Halozyme Therapeutic"
  },
  {
    "value": "HAS",
    "label": "HAS - Hasbro Inc"
  },
  {
    "value": "HAWK",
    "label": "HAWK - Blackhawk Network Ho"
  },
  {
    "value": "HAYN",
    "label": "HAYN - Haynes Intl Inc"
  },
  {
    "value": "HBAN",
    "label": "HBAN - Huntington Bcshs"
  },
  {
    "value": "HBANN",
    "label": "HBANN - Huntington Bancshares Incorporated Depositary Sh"
  },
  {
    "value": "HBANO",
    "label": "HBANO - Huntington Banc. Dep"
  },
  {
    "value": "HBANP",
    "label": "HBANP - Huntington BNC Pfd A"
  },
  {
    "value": "HBCP",
    "label": "HBCP - Home Bancorp Inc"
  },
  {
    "value": "HBHC",
    "label": "HBHC - Hancock Holding Co"
  },
  {
    "value": "HBHCL",
    "label": "HBHCL - Hancock Hld 5.95 Nt"
  },
  {
    "value": "HBIO",
    "label": "HBIO - Harvard Bioscience"
  },
  {
    "value": "HBK",
    "label": "HBK - Hamilton Bancorp"
  },
  {
    "value": "HBMD",
    "label": "HBMD - Howard Bancorp MD"
  },
  {
    "value": "HBNC",
    "label": "HBNC - Horizon Bancorp"
  },
  {
    "value": "HBP",
    "label": "HBP - Huttig Bldg Products"
  },
  {
    "value": "HCAP",
    "label": "HCAP - Harvest Capital Cred"
  },
  {
    "value": "HCAPL",
    "label": "HCAPL - Hrvst Cap 7% Nt 2020"
  },
  {
    "value": "HCCI",
    "label": "HCCI - Heritage-Crystal"
  },
  {
    "value": "HCKT",
    "label": "HCKT - Hackett Grp Inc"
  },
  {
    "value": "HCM",
    "label": "HCM - Hutchison China Ads"
  },
  {
    "value": "HCOM",
    "label": "HCOM - Hawaiian Telcom Hold"
  },
  {
    "value": "HCSG",
    "label": "HCSG - Healthcare Svcs Gp"
  },
  {
    "value": "HDNG",
    "label": "HDNG - Hardinge Inc"
  },
  {
    "value": "HDP",
    "label": "HDP - Hortonworks Cmn"
  },
  {
    "value": "HDS",
    "label": "HDS - HD Supply Hlds Cmm"
  },
  {
    "value": "HDSN",
    "label": "HDSN - Hudson Tech Inc"
  },
  {
    "value": "HEAR",
    "label": "HEAR - Turtle Beach Corp Cmn"
  },
  {
    "value": "HEBT",
    "label": "HEBT - Hebron Technology Co. Ltd."
  },
  {
    "value": "HEES",
    "label": "HEES - H&E Equip Services"
  },
  {
    "value": "HELE",
    "label": "HELE - Helen of Troy Ltd"
  },
  {
    "value": "HEOP",
    "label": "HEOP - Heritage Oaks Bancp"
  },
  {
    "value": "HFBC",
    "label": "HFBC - Hopfed Bancorp Inc"
  },
  {
    "value": "HFBL",
    "label": "HFBL - Home Federal"
  },
  {
    "value": "HFWA",
    "label": "HFWA - Heritage Financial"
  },
  {
    "value": "HGSH",
    "label": "HGSH - China Hgs Real Est"
  },
  {
    "value": "HIBB",
    "label": "HIBB - Hibbett Sports Inc"
  },
  {
    "value": "HIFS",
    "label": "HIFS - Hingham Inst For Svg"
  },
  {
    "value": "HIHO",
    "label": "HIHO - Highway Hldgs Ltd"
  },
  {
    "value": "HIIQ",
    "label": "HIIQ - Health Insurance Inn"
  },
  {
    "value": "HIMX",
    "label": "HIMX - Himax Technologies"
  },
  {
    "value": "HLG",
    "label": "HLG - Hailiang Edu Grp Ads"
  },
  {
    "value": "HLIT",
    "label": "HLIT - Harmonic Inc"
  },
  {
    "value": "HLNE",
    "label": "HLNE - Hamilton Lane Incorporated Class A"
  },
  {
    "value": "HMHC",
    "label": "HMHC - Houghton Mifflin Har"
  },
  {
    "value": "HMNF",
    "label": "HMNF - Hmn Financial Inc"
  },
  {
    "value": "HMNY",
    "label": "HMNY - Helios and Matsn Ana"
  },
  {
    "value": "HMST",
    "label": "HMST - Homestreet Inc"
  },
  {
    "value": "HMSY",
    "label": "HMSY - Hms Hldgs Cp"
  },
  {
    "value": "HMTA",
    "label": "HMTA - Hometown Bankshares"
  },
  {
    "value": "HMTV",
    "label": "HMTV - Hemisphere Media A"
  },
  {
    "value": "HNH",
    "label": "HNH - Handy & Harman Ltd"
  },
  {
    "value": "HNNA",
    "label": "HNNA - Hennessy Advisors Cmn"
  },
  {
    "value": "HNRG",
    "label": "HNRG - Hallador Energy Co"
  },
  {
    "value": "HOFT",
    "label": "HOFT - Hooker Furniture"
  },
  {
    "value": "HOLI",
    "label": "HOLI - Hollysys Automation"
  },
  {
    "value": "HOLX",
    "label": "HOLX - Hologic Inc"
  },
  {
    "value": "HOMB",
    "label": "HOMB - Home Bancshares Inc"
  },
  {
    "value": "HONE",
    "label": "HONE - Harborone Bancorp Inc"
  },
  {
    "value": "HOPE",
    "label": "HOPE - Hope Bancorp Inc"
  },
  {
    "value": "HOTR",
    "label": "HOTR - Chanticleer Hldgs"
  },
  {
    "value": "HOTRW",
    "label": "HOTRW - Chanticleer Warrants"
  },
  {
    "value": "HOVNP",
    "label": "HOVNP - Hovnanian Entr Dep A"
  },
  {
    "value": "HPJ",
    "label": "HPJ - Highpower Intl Inc"
  },
  {
    "value": "HPT",
    "label": "HPT - Hospitality Properites Trust"
  },
  {
    "value": "HQCL",
    "label": "HQCL - Hanwha Q Cells Ads"
  },
  {
    "value": "HQY",
    "label": "HQY - Healthequity Cmn Stk"
  },
  {
    "value": "HRMN",
    "label": "HRMN - Harmony Merger Cmn"
  },
  {
    "value": "HRMNU",
    "label": "HRMNU - Harmony Merger Unit"
  },
  {
    "value": "HRMNW",
    "label": "HRMNW - Harmony Merger Wrnt"
  },
  {
    "value": "HRTX",
    "label": "HRTX - Heron Therapeutics"
  },
  {
    "value": "HRZN",
    "label": "HRZN - Horizon Technology F"
  },
  {
    "value": "HSGX",
    "label": "HSGX - Histogenics Cp Cmn"
  },
  {
    "value": "HSIC",
    "label": "HSIC - Henry Schein Inc"
  },
  {
    "value": "HSII",
    "label": "HSII - Heidrick & Struggl"
  },
  {
    "value": "HSKA",
    "label": "HSKA - Heska Corp"
  },
  {
    "value": "HSNI",
    "label": "HSNI - HSN Inc Cmn Stk"
  },
  {
    "value": "HSON",
    "label": "HSON - Hudson Global Cmn"
  },
  {
    "value": "HSTM",
    "label": "HSTM - Healthstream Inc"
  },
  {
    "value": "HTBI",
    "label": "HTBI - Hometrust Bancshares"
  },
  {
    "value": "HTBK",
    "label": "HTBK - Heritage Commerce"
  },
  {
    "value": "HTBX",
    "label": "HTBX - Heat Biologics Inc"
  },
  {
    "value": "HTGM",
    "label": "HTGM - Htg Molecular Dia Cmn"
  },
  {
    "value": "HTHT",
    "label": "HTHT - China Lodg Grp Ads"
  },
  {
    "value": "HTLD",
    "label": "HTLD - Heartland Express"
  },
  {
    "value": "HTLF",
    "label": "HTLF - Heartland Finl USA"
  },
  {
    "value": "HUBG",
    "label": "HUBG - Hub Group Inc A"
  },
  {
    "value": "HUNT",
    "label": "HUNT - Hunter Maritime Acquisition Corp. Class A"
  },
  {
    "value": "HUNTU",
    "label": "HUNTU - Hunter Maritime Acquisition Corp"
  },
  {
    "value": "HUNTW",
    "label": "HUNTW - Hunter Maritime Acquisition Corp. Warrant"
  },
  {
    "value": "HURC",
    "label": "HURC - Hurco Cos Inc"
  },
  {
    "value": "HURN",
    "label": "HURN - Huron Consulting"
  },
  {
    "value": "HVBC",
    "label": "HVBC - Hv Bancorp Inc"
  },
  {
    "value": "HWBK",
    "label": "HWBK - Hawthorn Bancshares"
  },
  {
    "value": "HWCC",
    "label": "HWCC - Houston Wire Cable"
  },
  {
    "value": "HWKN",
    "label": "HWKN - Hawkins Inc"
  },
  {
    "value": "HYGS",
    "label": "HYGS - Hydrogenics Corp"
  },
  {
    "value": "HYLS",
    "label": "HYLS - First Trust Tactical"
  },
  {
    "value": "HYND",
    "label": "HYND - Wt Bofa ML HY Ngdr F"
  },
  {
    "value": "HYXE",
    "label": "HYXE - Ishares Iboxx $ High Yield Ex O"
  },
  {
    "value": "HYZD",
    "label": "HYZD - Wt Bofa ML HY Zero D"
  },
  {
    "value": "HZNP",
    "label": "HZNP - Horizon Pharma Ord"
  },
  {
    "value": "IAC",
    "label": "IAC - Iac/Interactive"
  },
  {
    "value": "IART",
    "label": "IART - Integra Lifesciences"
  },
  {
    "value": "IBB",
    "label": "IBB - Ishare Nasdaq Biotech ETF"
  },
  {
    "value": "IBCP",
    "label": "IBCP - Independent Bk Cp"
  },
  {
    "value": "IBKC",
    "label": "IBKC - Iberiabank Corp"
  },
  {
    "value": "IBKCO",
    "label": "IBKCO - Iberiabank Ds Rep C"
  },
  {
    "value": "IBKCP",
    "label": "IBKCP - Iberiabank Dp Sh B"
  },
  {
    "value": "IBKR",
    "label": "IBKR - Interactive Brokers"
  },
  {
    "value": "IBOC",
    "label": "IBOC - Intl Bancshares"
  },
  {
    "value": "IBTX",
    "label": "IBTX - Independent Bank Grp"
  },
  {
    "value": "IBUY",
    "label": "IBUY - Amplify Onln Rtl ETF"
  },
  {
    "value": "ICAD",
    "label": "ICAD - Icad Inc Cmn Stk"
  },
  {
    "value": "ICBK",
    "label": "ICBK - County Bancorp Cmn"
  },
  {
    "value": "ICCC",
    "label": "ICCC - Immucell Cp"
  },
  {
    "value": "ICCH",
    "label": "ICCH - Icc Holdings Inc."
  },
  {
    "value": "ICFI",
    "label": "ICFI - Icf International"
  },
  {
    "value": "ICHR",
    "label": "ICHR - Ichor"
  },
  {
    "value": "ICLN",
    "label": "ICLN - Ishres Gbl Cln Ergy"
  },
  {
    "value": "ICLR",
    "label": "ICLR - Icon Plc"
  },
  {
    "value": "ICON",
    "label": "ICON - Iconix Brand Group"
  },
  {
    "value": "ICPT",
    "label": "ICPT - Intercept Pharmaceut"
  },
  {
    "value": "ICUI",
    "label": "ICUI - I C U Medical Inc"
  },
  {
    "value": "IDCC",
    "label": "IDCC - Interdigital Inc"
  },
  {
    "value": "IDLB",
    "label": "IDLB - PS FTSE International Low Beta Equal Weight"
  },
  {
    "value": "IDRA",
    "label": "IDRA - Idera Pharmaceutical"
  },
  {
    "value": "IDSA",
    "label": "IDSA - Industrial Svcs Am"
  },
  {
    "value": "IDSY",
    "label": "IDSY - Id Systems Inc"
  },
  {
    "value": "IDTI",
    "label": "IDTI - Integrated Devices"
  },
  {
    "value": "IDXG",
    "label": "IDXG - Interpace Diag Grp"
  },
  {
    "value": "IDXX",
    "label": "IDXX - Idexx Laboratories"
  },
  {
    "value": "IEP",
    "label": "IEP - Icahn Enterprises"
  },
  {
    "value": "IESC",
    "label": "IESC - Ies Holdings Cmn"
  },
  {
    "value": "IEUS",
    "label": "IEUS - Ishares MSCI Europe"
  },
  {
    "value": "IFEU",
    "label": "IFEU - Ishares Europe Dvlpd"
  },
  {
    "value": "IFGL",
    "label": "IFGL - Ishares Intl Devlp"
  },
  {
    "value": "IFMK",
    "label": "IFMK - Ifresh Inc"
  },
  {
    "value": "IFON",
    "label": "IFON - Infosonic Corp"
  },
  {
    "value": "IFV",
    "label": "IFV - First Trt Dorsey Wri"
  },
  {
    "value": "IGF",
    "label": "IGF - Ishares Global Infra"
  },
  {
    "value": "IGLD",
    "label": "IGLD - Internet Gold-Golden"
  },
  {
    "value": "IGOV",
    "label": "IGOV - Ishares Intl Trsy Bd"
  },
  {
    "value": "III",
    "label": "III - Information Svcs Grp"
  },
  {
    "value": "IIIN",
    "label": "IIIN - Insteel Industries"
  },
  {
    "value": "IIJI",
    "label": "IIJI - Internet Init Jap"
  },
  {
    "value": "IIN",
    "label": "IIN - Intricon Corp"
  },
  {
    "value": "IIVI",
    "label": "IIVI - I I V I Inc"
  },
  {
    "value": "IKGH",
    "label": "IKGH - Iao Kun Grp Holdings"
  },
  {
    "value": "IKNX",
    "label": "IKNX - Ikonics Corp"
  },
  {
    "value": "ILG",
    "label": "ILG - Ilg Inc"
  },
  {
    "value": "ILMN",
    "label": "ILMN - Illumina Inc"
  },
  {
    "value": "IMDZ",
    "label": "IMDZ - Immune Design CS"
  },
  {
    "value": "IMED",
    "label": "IMED - Purefunds Etfx Healthtech ETF"
  },
  {
    "value": "IMGN",
    "label": "IMGN - Immunogen Inc"
  },
  {
    "value": "IMI",
    "label": "IMI - Intermolecular Inc"
  },
  {
    "value": "IMKTA",
    "label": "IMKTA - Ingles Markets Inc"
  },
  {
    "value": "IMMR",
    "label": "IMMR - Immersion Corp"
  },
  {
    "value": "IMMU",
    "label": "IMMU - Immunomedics Inc"
  },
  {
    "value": "IMMY",
    "label": "IMMY - Imprimis Phar Cmn"
  },
  {
    "value": "IMNP",
    "label": "IMNP - Immune Pharmaceuticals Inc."
  },
  {
    "value": "IMOS",
    "label": "IMOS - Chipmos Tech New"
  },
  {
    "value": "IMPV",
    "label": "IMPV - Imperva Inc"
  },
  {
    "value": "INAP",
    "label": "INAP - Internap Corp Cmn"
  },
  {
    "value": "INBK",
    "label": "INBK - First Internet Bcp"
  },
  {
    "value": "INBKL",
    "label": "INBKL - First Internet Bancorp"
  },
  {
    "value": "INCR",
    "label": "INCR - Inc Research A Cmn"
  },
  {
    "value": "INCY",
    "label": "INCY - Incyte Corporation"
  },
  {
    "value": "INDB",
    "label": "INDB - Independent Bk Corp"
  },
  {
    "value": "INDY",
    "label": "INDY - Ishares India 50 ETF"
  },
  {
    "value": "INFI",
    "label": "INFI - Infinity Pharmaceuti"
  },
  {
    "value": "INFN",
    "label": "INFN - Infinera Corporation"
  },
  {
    "value": "INFO",
    "label": "INFO - IHS Markit Ltd"
  },
  {
    "value": "INFR",
    "label": "INFR - Legg Mason ETF Equity Trust Legg Mason Global In"
  },
  {
    "value": "INGN",
    "label": "INGN - Inogen Inc"
  },
  {
    "value": "INNL",
    "label": "INNL - Innocoll Hld Ord Shr"
  },
  {
    "value": "INO",
    "label": "INO - Inovio Pharma Cmn"
  },
  {
    "value": "INOD",
    "label": "INOD - Innodata Inc"
  },
  {
    "value": "INOV",
    "label": "INOV - Inovalon Hldgs Cm A"
  },
  {
    "value": "INPX",
    "label": "INPX - Inpixon"
  },
  {
    "value": "INSE",
    "label": "INSE - Inspired Entertainment Inc."
  },
  {
    "value": "INSEW",
    "label": "INSEW - Inspired Entertainment Inc. Warrants"
  },
  {
    "value": "INSG",
    "label": "INSG - Novatel Wireless Cmn"
  },
  {
    "value": "INSM",
    "label": "INSM - Insmed Inc"
  },
  {
    "value": "INSY",
    "label": "INSY - Insys Theraptcs Cmn"
  },
  {
    "value": "INTC",
    "label": "INTC - Intel Corp"
  },
  {
    "value": "INTG",
    "label": "INTG - Intergroup Cp The"
  },
  {
    "value": "INTL",
    "label": "INTL - Intl Fcstone Inc Cmn"
  },
  {
    "value": "INTU",
    "label": "INTU - Intuit Inc"
  },
  {
    "value": "INTX",
    "label": "INTX - Intersections Inc"
  },
  {
    "value": "INVA",
    "label": "INVA - Innoviva Inc"
  },
  {
    "value": "INVE",
    "label": "INVE - Identiv Inc"
  },
  {
    "value": "INVT",
    "label": "INVT - Inventergy Glbl Inc"
  },
  {
    "value": "INWK",
    "label": "INWK - Innerworkings Inc"
  },
  {
    "value": "IONS",
    "label": "IONS - Ionis Pharmaceutical"
  },
  {
    "value": "IOSP",
    "label": "IOSP - Innospec Inc"
  },
  {
    "value": "IOTS",
    "label": "IOTS - Adesto Tech Cmn"
  },
  {
    "value": "IPAR",
    "label": "IPAR - Inter Parfums Inc"
  },
  {
    "value": "IPAS",
    "label": "IPAS - Ipass Inc"
  },
  {
    "value": "IPCC",
    "label": "IPCC - Infinity Property"
  },
  {
    "value": "IPCI",
    "label": "IPCI - Intellipharmaceutics"
  },
  {
    "value": "IPDN",
    "label": "IPDN - Professional Diversi"
  },
  {
    "value": "IPGP",
    "label": "IPGP - Ipg Photonics Corp"
  },
  {
    "value": "IPHS",
    "label": "IPHS - Innophos Hldngs Inc"
  },
  {
    "value": "IPKW",
    "label": "IPKW - PS International Buyback Achievers"
  },
  {
    "value": "IPWR",
    "label": "IPWR - Ideal Power Inc"
  },
  {
    "value": "IPXL",
    "label": "IPXL - Impax Labs Inc"
  },
  {
    "value": "IRBT",
    "label": "IRBT - Irobot Corporation"
  },
  {
    "value": "IRCP",
    "label": "IRCP - Irsa Propiedades Ads"
  },
  {
    "value": "IRDM",
    "label": "IRDM - Iridium Comm Inc"
  },
  {
    "value": "IRDMB",
    "label": "IRDMB - Iridium 6.75 Sr B Pf"
  },
  {
    "value": "IRIX",
    "label": "IRIX - Iridex Cp"
  },
  {
    "value": "IRMD",
    "label": "IRMD - Iradimed Cp Cm Stk"
  },
  {
    "value": "IROQ",
    "label": "IROQ - If Bancorp Inc"
  },
  {
    "value": "IRTC",
    "label": "IRTC - Irhythm Technologies Inc"
  },
  {
    "value": "IRWD",
    "label": "IRWD - Ironwood Pharmaceuti"
  },
  {
    "value": "ISBC",
    "label": "ISBC - Investors Bancorp"
  },
  {
    "value": "ISCA",
    "label": "ISCA - Intl Speedway Cl A"
  },
  {
    "value": "ISHG",
    "label": "ISHG - Ishares 1-3 Yr Intl"
  },
  {
    "value": "ISIG",
    "label": "ISIG - Insignia Systems"
  },
  {
    "value": "ISLE",
    "label": "ISLE - Isle of Capri Cas"
  },
  {
    "value": "ISM",
    "label": "ISM - SLM Corp Med Nt A"
  },
  {
    "value": "ISNS",
    "label": "ISNS - Image Sensing Syst"
  },
  {
    "value": "ISRG",
    "label": "ISRG - Intuitive Surg Inc"
  },
  {
    "value": "ISRL",
    "label": "ISRL - Isramco Inc"
  },
  {
    "value": "ISSC",
    "label": "ISSC - Innovative Sol&Sup"
  },
  {
    "value": "ISTR",
    "label": "ISTR - Investar Holding Cmn"
  },
  {
    "value": "ITCI",
    "label": "ITCI - Intra-Cellular Ther"
  },
  {
    "value": "ITEK",
    "label": "ITEK - Inotek Pharma Cmn"
  },
  {
    "value": "ITEQ",
    "label": "ITEQ - Blstar Ta-Bgtch Isrl"
  },
  {
    "value": "ITI",
    "label": "ITI - Iteris Inc Cmn Stk"
  },
  {
    "value": "ITIC",
    "label": "ITIC - Investors Title Co"
  },
  {
    "value": "ITRI",
    "label": "ITRI - Itron Inc"
  },
  {
    "value": "ITRN",
    "label": "ITRN - Ituran Location"
  },
  {
    "value": "ITUS",
    "label": "ITUS - Itus Corp Cmn"
  },
  {
    "value": "IVAC",
    "label": "IVAC - Intevac Inc"
  },
  {
    "value": "IVTY",
    "label": "IVTY - Invuity Inc Cmn Stk"
  },
  {
    "value": "IXUS",
    "label": "IXUS - Ishs Core ACWI IMI"
  },
  {
    "value": "IXYS",
    "label": "IXYS - Ixys Corporation"
  },
  {
    "value": "IZEA",
    "label": "IZEA - Izea Inc"
  },
  {
    "value": "JACK",
    "label": "JACK - Jack In The Box Inc"
  },
  {
    "value": "JAGX",
    "label": "JAGX - Jaguar Animal Cmn"
  },
  {
    "value": "JAKK",
    "label": "JAKK - Jakks Pacific Inc"
  },
  {
    "value": "JASN",
    "label": "JASN - Jason Indst Cmn"
  },
  {
    "value": "JASNW",
    "label": "JASNW - Jason Industries Wt"
  },
  {
    "value": "JASO",
    "label": "JASO - JA Solar Holdings"
  },
  {
    "value": "JAZZ",
    "label": "JAZZ - Jazz Pharma Plc"
  },
  {
    "value": "JBHT",
    "label": "JBHT - J B Hunt Transport"
  },
  {
    "value": "JBLU",
    "label": "JBLU - Jetblue Airways Cp"
  },
  {
    "value": "JBSS",
    "label": "JBSS - John B Sanfilippo"
  },
  {
    "value": "JCOM",
    "label": "JCOM - J2 Global Inc Cmn"
  },
  {
    "value": "JCS",
    "label": "JCS - Commun Systems Inc"
  },
  {
    "value": "JCTCF",
    "label": "JCTCF - Jewett-Cameron Trd"
  },
  {
    "value": "JD",
    "label": "JD - Jd.Com Inc Ads"
  },
  {
    "value": "JIVE",
    "label": "JIVE - Jive Software Inc"
  },
  {
    "value": "JJSF",
    "label": "JJSF - J J Snack Foods"
  },
  {
    "value": "JKHY",
    "label": "JKHY - Jack Henry & Assoc"
  },
  {
    "value": "JKI",
    "label": "JKI - Ishares Mrgng Mid Va"
  },
  {
    "value": "JMBA",
    "label": "JMBA - Jamba Inc Cmn Stk"
  },
  {
    "value": "JMU",
    "label": "JMU - Wowo Ltd Ads"
  },
  {
    "value": "JNCE",
    "label": "JNCE - Jounce Therapeutics Inc"
  },
  {
    "value": "JNP",
    "label": "JNP - Juniper Pharm Inc"
  },
  {
    "value": "JOBS",
    "label": "JOBS - 51Job Inc"
  },
  {
    "value": "JOUT",
    "label": "JOUT - Johnson Outdoors I"
  },
  {
    "value": "JRJC",
    "label": "JRJC - China Finance Online"
  },
  {
    "value": "JRVR",
    "label": "JRVR - James River Gp HD Cmn"
  },
  {
    "value": "JSM",
    "label": "JSM - SLM Cp 6% Sr Nt"
  },
  {
    "value": "JSMD",
    "label": "JSMD - Jns Sml Mid Cap ETF"
  },
  {
    "value": "JSML",
    "label": "JSML - Janus Sm Cap Gr ETF"
  },
  {
    "value": "JSYN",
    "label": "JSYN - Jensyn Acq Cp CS"
  },
  {
    "value": "JSYNR",
    "label": "JSYNR - Jensyn Acq Cp Rt"
  },
  {
    "value": "JSYNU",
    "label": "JSYNU - Jensyn Acq Cp Ut"
  },
  {
    "value": "JSYNW",
    "label": "JSYNW - Jensyn Acq Cp Wt"
  },
  {
    "value": "JTPY",
    "label": "JTPY - Jetpay Corporation"
  },
  {
    "value": "JUNO",
    "label": "JUNO - Juno Therapeutics Cmn"
  },
  {
    "value": "JVA",
    "label": "JVA - Coffee Holding Co."
  },
  {
    "value": "JXSB",
    "label": "JXSB - Jacksonville Bncp"
  },
  {
    "value": "JYNT",
    "label": "JYNT - The Joint Corp Cmn"
  },
  {
    "value": "KAACU",
    "label": "KAACU - Kayne Anderson Acquisition Corp. Unit"
  },
  {
    "value": "KALU",
    "label": "KALU - Kaiser Aluminum"
  },
  {
    "value": "KALV",
    "label": "KALV - Kalvista Pharmaceuticals Inc"
  },
  {
    "value": "KANG",
    "label": "KANG - Ikang Healthcare ADR"
  },
  {
    "value": "KBAL",
    "label": "KBAL - Kimball Intl Cl B"
  },
  {
    "value": "KBSF",
    "label": "KBSF - Kbs Fashion Gp Ltd"
  },
  {
    "value": "KBWB",
    "label": "KBWB - KBW Bank Powershares"
  },
  {
    "value": "KBWD",
    "label": "KBWD - KBW High Div Yield Financial Powershares"
  },
  {
    "value": "KBWP",
    "label": "KBWP - KBW Prop & Casuality Insur Powershares"
  },
  {
    "value": "KBWR",
    "label": "KBWR - KBW Regional Banking Powershares"
  },
  {
    "value": "KBWY",
    "label": "KBWY - KBW Prem Yield Equity REIT Powershares"
  },
  {
    "value": "KCAP",
    "label": "KCAP - Kcap Financial Cmn"
  },
  {
    "value": "KE",
    "label": "KE - Kimball Electrnc Cmn"
  },
  {
    "value": "KELYA",
    "label": "KELYA - Kelly Svcs Cl A"
  },
  {
    "value": "KELYB",
    "label": "KELYB - Kelly Services Cl"
  },
  {
    "value": "KEQU",
    "label": "KEQU - Kewaunee Scientifi"
  },
  {
    "value": "KERX",
    "label": "KERX - Keryx Biopharm Inc"
  },
  {
    "value": "KEYW",
    "label": "KEYW - Keyw Holding Corp"
  },
  {
    "value": "KFFB",
    "label": "KFFB - Kentucky First Fed"
  },
  {
    "value": "KFRC",
    "label": "KFRC - Kforce Inc"
  },
  {
    "value": "KGJI",
    "label": "KGJI - Kingold Jewelry Inc"
  },
  {
    "value": "KHC",
    "label": "KHC - Kraft Heinz Co Cmn"
  },
  {
    "value": "KIN",
    "label": "KIN - Kindred Biosciences"
  },
  {
    "value": "KINS",
    "label": "KINS - Kingstone Cos Inc"
  },
  {
    "value": "KIRK",
    "label": "KIRK - Kirkland's Inc"
  },
  {
    "value": "KITE",
    "label": "KITE - Kite Pharma Inc Cmn"
  },
  {
    "value": "KLAC",
    "label": "KLAC - K L A-Tencor Corp"
  },
  {
    "value": "KLIC",
    "label": "KLIC - Kulicke and Soffa"
  },
  {
    "value": "KLRE",
    "label": "KLRE - Klr Energy Acq Cm A"
  },
  {
    "value": "KLREU",
    "label": "KLREU - Klr Energy Acq Ut"
  },
  {
    "value": "KLREW",
    "label": "KLREW - Klr Energy Acq Wt"
  },
  {
    "value": "KLXI",
    "label": "KLXI - Klx Inc"
  },
  {
    "value": "KMDA",
    "label": "KMDA - Kamada Ltd"
  },
  {
    "value": "KMPH",
    "label": "KMPH - Kempharm Inc Cmn"
  },
  {
    "value": "KNDI",
    "label": "KNDI - Kandi Techs Grp Cmn"
  },
  {
    "value": "KNSL",
    "label": "KNSL - Kinsale Capital Group Inc Cmn"
  },
  {
    "value": "KONA",
    "label": "KONA - Kona Grill Inc"
  },
  {
    "value": "KONE",
    "label": "KONE - Kingtone Wirelessinf"
  },
  {
    "value": "KOOL",
    "label": "KOOL - Cesca Therapeutics I"
  },
  {
    "value": "KOPN",
    "label": "KOPN - Kopin Cp"
  },
  {
    "value": "KOSS",
    "label": "KOSS - Koss Cp"
  },
  {
    "value": "KPTI",
    "label": "KPTI - Karyopharm Therapeut"
  },
  {
    "value": "KRMA",
    "label": "KRMA - Global X Conscious Companies ETF"
  },
  {
    "value": "KRNT",
    "label": "KRNT - Kornit Digital Ord"
  },
  {
    "value": "KRNY",
    "label": "KRNY - Kearny Financial Cmn"
  },
  {
    "value": "KTCC",
    "label": "KTCC - Key Tronic Cp"
  },
  {
    "value": "KTEC",
    "label": "KTEC - Key Technology Inc"
  },
  {
    "value": "KTOS",
    "label": "KTOS - Kratos Defns"
  },
  {
    "value": "KTOV",
    "label": "KTOV - Kitov Pharamceut Ads"
  },
  {
    "value": "KTOVW",
    "label": "KTOVW - Kitov Pharamceuti Wt"
  },
  {
    "value": "KTWO",
    "label": "KTWO - K2M Group Hldngs Cmn"
  },
  {
    "value": "KURA",
    "label": "KURA - Kura Oncology Cmn"
  },
  {
    "value": "KVHI",
    "label": "KVHI - K V H Inds Inc"
  },
  {
    "value": "KWEB",
    "label": "KWEB - Kraneshs Csi Chn ETF"
  },
  {
    "value": "KZ",
    "label": "KZ - Kongzhong Corp"
  },
  {
    "value": "LABL",
    "label": "LABL - Multi Color Cp"
  },
  {
    "value": "LAKE",
    "label": "LAKE - Lakeland Inds Inc"
  },
  {
    "value": "LALT",
    "label": "LALT - PS Multi-Strategy Alternative"
  },
  {
    "value": "LAMR",
    "label": "LAMR - Lamar Advertis A"
  },
  {
    "value": "LANC",
    "label": "LANC - Lancaster Colony Cor"
  },
  {
    "value": "LAND",
    "label": "LAND - Gladstone Land Corp"
  },
  {
    "value": "LANDP",
    "label": "LANDP - Gladstone Land Corp"
  },
  {
    "value": "LARK",
    "label": "LARK - Landmark Bancorp Inc"
  },
  {
    "value": "LAUR",
    "label": "LAUR - Laureate Education Inc"
  },
  {
    "value": "LAWS",
    "label": "LAWS - Lawson Products In"
  },
  {
    "value": "LAYN",
    "label": "LAYN - Layne Christensen"
  },
  {
    "value": "LBAI",
    "label": "LBAI - Lakeland Bancorp Inc"
  },
  {
    "value": "LBIO",
    "label": "LBIO - Lion Biotechnologies"
  },
  {
    "value": "LBIX",
    "label": "LBIX - Leading Brands"
  },
  {
    "value": "LBRDA",
    "label": "LBRDA - Liberty Broadbd A Cmn"
  },
  {
    "value": "LBRDK",
    "label": "LBRDK - Liberty Broadbd C Cmn"
  },
  {
    "value": "LBTYA",
    "label": "LBTYA - Liberty Global Ord A"
  },
  {
    "value": "LBTYB",
    "label": "LBTYB - Liberty Global Ord B"
  },
  {
    "value": "LBTYK",
    "label": "LBTYK - Liberty Global Ord C"
  },
  {
    "value": "LCA",
    "label": "LCA - Landcadia Holdings Inc"
  },
  {
    "value": "LCAHU",
    "label": "LCAHU - Landcadia Holding Un"
  },
  {
    "value": "LCAHW",
    "label": "LCAHW - Landcadia Holdings Inc. Warrant"
  },
  {
    "value": "LCNB",
    "label": "LCNB - Lcnb Corporation"
  },
  {
    "value": "LCUT",
    "label": "LCUT - Lifetime Brands Inc"
  },
  {
    "value": "LDRI",
    "label": "LDRI - PS Ladderrite 0-5 Year Corporate Bond"
  },
  {
    "value": "LE",
    "label": "LE - Lands' End Inc Cmn"
  },
  {
    "value": "LECO",
    "label": "LECO - Lincoln Elec Hldg"
  },
  {
    "value": "LEDS",
    "label": "LEDS - Semileds Corporation"
  },
  {
    "value": "LENS",
    "label": "LENS - Presbia Plc Ord Shs"
  },
  {
    "value": "LEXEA",
    "label": "LEXEA - Liberty Expedia Holdings Inc"
  },
  {
    "value": "LFUS",
    "label": "LFUS - Littelfuse Inc"
  },
  {
    "value": "LFVN",
    "label": "LFVN - Lifevantage Cp Cmn"
  },
  {
    "value": "LGCY",
    "label": "LGCY - Legacy Reserves LP"
  },
  {
    "value": "LGCYO",
    "label": "LGCYO - Legacy Resrvs Sr B"
  },
  {
    "value": "LGCYP",
    "label": "LGCYP - Legacy Resrvs Sr A"
  },
  {
    "value": "LGIH",
    "label": "LGIH - LGI Homes Inc"
  },
  {
    "value": "LGND",
    "label": "LGND - Ligand Pharm Cmn"
  },
  {
    "value": "LHCG",
    "label": "LHCG - LHC Group Inc"
  },
  {
    "value": "LIFE",
    "label": "LIFE - Atyr Pharma Inc Cmn"
  },
  {
    "value": "LILA",
    "label": "LILA - Liberty Lilac Cl A"
  },
  {
    "value": "LILAK",
    "label": "LILAK - Liberty Lilac Cl C"
  },
  {
    "value": "LINC",
    "label": "LINC - Lincoln Educational"
  },
  {
    "value": "LIND",
    "label": "LIND - Lindblad Expd Hld Cmn"
  },
  {
    "value": "LINDW",
    "label": "LINDW - Lindblad Expd Wt"
  },
  {
    "value": "LINK",
    "label": "LINK - Interlink Elctrnc Cmn"
  },
  {
    "value": "LION",
    "label": "LION - Fidelity Southern Cp"
  },
  {
    "value": "LITE",
    "label": "LITE - Lumentum Hld Cmn"
  },
  {
    "value": "LIVE",
    "label": "LIVE - Live Ventures Cmn"
  },
  {
    "value": "LIVN",
    "label": "LIVN - Livanova Plc Or Sh"
  },
  {
    "value": "LJPC",
    "label": "LJPC - La Jolla Pharma"
  },
  {
    "value": "LKFN",
    "label": "LKFN - Lakeland Finl Corp"
  },
  {
    "value": "LKOR",
    "label": "LKOR - Flxshrs Crsc Lg Corp"
  },
  {
    "value": "LKQ",
    "label": "LKQ - LKQ Corp"
  },
  {
    "value": "LLEX",
    "label": "LLEX - Lilis Energy Inc"
  },
  {
    "value": "LLIT",
    "label": "LLIT - Lianluo Smart Ltd"
  },
  {
    "value": "LLNW",
    "label": "LLNW - Limelight Networks"
  },
  {
    "value": "LMAT",
    "label": "LMAT - Lemaitre Vascular"
  },
  {
    "value": "LMB",
    "label": "LMB - Limbach Holdings Inc"
  },
  {
    "value": "LMBS",
    "label": "LMBS - First TR Low Opp ETF"
  },
  {
    "value": "LMFA",
    "label": "LMFA - Lm Funding Cmn"
  },
  {
    "value": "LMFAW",
    "label": "LMFAW - Lm Funding Wt"
  },
  {
    "value": "LMIA",
    "label": "LMIA - LMI Aerospace Inc"
  },
  {
    "value": "LMNR",
    "label": "LMNR - Limoneira Co"
  },
  {
    "value": "LMNX",
    "label": "LMNX - Luminex Corporation"
  },
  {
    "value": "LMOS",
    "label": "LMOS - Lumos Networks Corp"
  },
  {
    "value": "LMRK",
    "label": "LMRK - Landmark Cmn Units"
  },
  {
    "value": "LMRKO",
    "label": "LMRKO - Landmark Infrastructure Partners LP"
  },
  {
    "value": "LMRKP",
    "label": "LMRKP - Landmark Inf Prf"
  },
  {
    "value": "LNCE",
    "label": "LNCE - Snyders-Lance Inc"
  },
  {
    "value": "LNDC",
    "label": "LNDC - Landec Cp"
  },
  {
    "value": "LNGR",
    "label": "LNGR - Glbl X Lngvty Th Ett"
  },
  {
    "value": "LNTH",
    "label": "LNTH - Lantheus Holdings Cmn"
  },
  {
    "value": "LOAN",
    "label": "LOAN - Manhattan Bridge"
  },
  {
    "value": "LOB",
    "label": "LOB - Live Oak Bancsh Cmn"
  },
  {
    "value": "LOCO",
    "label": "LOCO - El Pollo Loco Cmn"
  },
  {
    "value": "LOGI",
    "label": "LOGI - Logitech Int Sa"
  },
  {
    "value": "LOGM",
    "label": "LOGM - Logmein Inc"
  },
  {
    "value": "LONE",
    "label": "LONE - Lonestar Resources US Inc"
  },
  {
    "value": "LOPE",
    "label": "LOPE - Grand Canyon Educati"
  },
  {
    "value": "LORL",
    "label": "LORL - Loral Space Comm"
  },
  {
    "value": "LOXO",
    "label": "LOXO - Loxo Oncology CS"
  },
  {
    "value": "LPCN",
    "label": "LPCN - Lipocine Inc Cmn"
  },
  {
    "value": "LPLA",
    "label": "LPLA - Lpl Financial Hld Cmn"
  },
  {
    "value": "LPNT",
    "label": "LPNT - Lifepoint Health Cmn"
  },
  {
    "value": "LPSN",
    "label": "LPSN - Liveperson Inc"
  },
  {
    "value": "LPTH",
    "label": "LPTH - Lightpath Tech Inc"
  },
  {
    "value": "LPTX",
    "label": "LPTX - Leap Therapeutics Inc"
  },
  {
    "value": "LQDT",
    "label": "LQDT - Liquidity Services"
  },
  {
    "value": "LRAD",
    "label": "LRAD - Lrad Corporation"
  },
  {
    "value": "LRCX",
    "label": "LRCX - Lam Research Corp"
  },
  {
    "value": "LSBK",
    "label": "LSBK - Lake Shore Bancorp"
  },
  {
    "value": "LSCC",
    "label": "LSCC - Lattice Semicond"
  },
  {
    "value": "LSTR",
    "label": "LSTR - Landstar System"
  },
  {
    "value": "LSXMA",
    "label": "LSXMA - Liberty Srs XM CS A"
  },
  {
    "value": "LSXMB",
    "label": "LSXMB - Liberty Srs XM CS B"
  },
  {
    "value": "LSXMK",
    "label": "LSXMK - Liberty Srs XM CS C"
  },
  {
    "value": "LTBR",
    "label": "LTBR - Lightbridge Corp"
  },
  {
    "value": "LTEA",
    "label": "LTEA - Long Island Iced Tea Corp"
  },
  {
    "value": "LTRPA",
    "label": "LTRPA - Liberty Tripadv A Cmn"
  },
  {
    "value": "LTRPB",
    "label": "LTRPB - Liberty Tripadv B Cmn"
  },
  {
    "value": "LTRX",
    "label": "LTRX - Lantronix Inc"
  },
  {
    "value": "LTXB",
    "label": "LTXB - Legacytexas Fnl Cmn"
  },
  {
    "value": "LULU",
    "label": "LULU - Lululemon Athletica"
  },
  {
    "value": "LUNA",
    "label": "LUNA - Luna Innovations Inc"
  },
  {
    "value": "LVHD",
    "label": "LVHD - Legg Mason Lv HD ETF"
  },
  {
    "value": "LVNTA",
    "label": "LVNTA - Liberty Vntrs Srs A"
  },
  {
    "value": "LWAY",
    "label": "LWAY - Lifeway Foods Inc"
  },
  {
    "value": "LXRX",
    "label": "LXRX - Lexicon Pharmaceutcl"
  },
  {
    "value": "LYTS",
    "label": "LYTS - L S I Industries I"
  },
  {
    "value": "MACK",
    "label": "MACK - Merrimack Pharmaceut"
  },
  {
    "value": "MACQ",
    "label": "MACQ - M I Acquisitions Inc"
  },
  {
    "value": "MACQU",
    "label": "MACQU - M I Acquisitions Inc. Un"
  },
  {
    "value": "MACQW",
    "label": "MACQW - M I Acquisitions Inc. Warrant"
  },
  {
    "value": "MAGS",
    "label": "MAGS - Magal Security Syst"
  },
  {
    "value": "MAMS",
    "label": "MAMS - Mam Software Gp Cmn"
  },
  {
    "value": "MANH",
    "label": "MANH - Manhattan Assoc"
  },
  {
    "value": "MANT",
    "label": "MANT - Mantech Intl Cp A"
  },
  {
    "value": "MAR",
    "label": "MAR - Marriot Int Class A"
  },
  {
    "value": "MARA",
    "label": "MARA - Marathon Patent Grou"
  },
  {
    "value": "MARK",
    "label": "MARK - Remark Holdings Inc."
  },
  {
    "value": "MARPS",
    "label": "MARPS - Marine Petroleum U"
  },
  {
    "value": "MASI",
    "label": "MASI - Masimo Corporation"
  },
  {
    "value": "MAT",
    "label": "MAT - Mattel Inc"
  },
  {
    "value": "MATR",
    "label": "MATR - Mattersight Corp"
  },
  {
    "value": "MATW",
    "label": "MATW - Matthews Intl Corp"
  },
  {
    "value": "MAUI",
    "label": "MAUI - Advisrshs Mkt Adptve"
  },
  {
    "value": "MAYS",
    "label": "MAYS - J W Mays Inc"
  },
  {
    "value": "MB",
    "label": "MB - Mindbody Cls A Cmn"
  },
  {
    "value": "MBCN",
    "label": "MBCN - Middlefield Banc Cmn"
  },
  {
    "value": "MBFI",
    "label": "MBFI - MB Financial Inc"
  },
  {
    "value": "MBFIP",
    "label": "MBFIP - MB Financial Pd Sr A"
  },
  {
    "value": "MBII",
    "label": "MBII - Marrone Bio Innov"
  },
  {
    "value": "MBOT",
    "label": "MBOT - Microbot Medical Inc"
  },
  {
    "value": "MBRG",
    "label": "MBRG - Middleburg Finl Corp"
  },
  {
    "value": "MBRX",
    "label": "MBRX - Moleculin Biotech CS"
  },
  {
    "value": "MBSD",
    "label": "MBSD - Flexshares Dspln MBS"
  },
  {
    "value": "MBTF",
    "label": "MBTF - Mbt Financial Corp"
  },
  {
    "value": "MBUU",
    "label": "MBUU - Malibu Boats Cmn A"
  },
  {
    "value": "MBVT",
    "label": "MBVT - Merchants Bancshares"
  },
  {
    "value": "MBVX",
    "label": "MBVX - Mabvax Therapeutics Holdings Inc"
  },
  {
    "value": "MBWM",
    "label": "MBWM - Mercantile Bank Corp"
  },
  {
    "value": "MCBC",
    "label": "MCBC - Macatawa Bank Corp"
  },
  {
    "value": "MCEF",
    "label": "MCEF - First Trust Municipal CEF Income Opportunity ETF"
  },
  {
    "value": "MCEP",
    "label": "MCEP - Mid-Con Energy Partn"
  },
  {
    "value": "MCFT",
    "label": "MCFT - Mcbc Holdings Cmn"
  },
  {
    "value": "MCHI",
    "label": "MCHI - Ishares MSCI China ETF"
  },
  {
    "value": "MCHP",
    "label": "MCHP - Microchip Technology"
  },
  {
    "value": "MCHX",
    "label": "MCHX - Marchex Inc"
  },
  {
    "value": "MCRB",
    "label": "MCRB - Seres Theraptc Cmn"
  },
  {
    "value": "MCRI",
    "label": "MCRI - Monarch Casino"
  },
  {
    "value": "MDCA",
    "label": "MDCA - Mdc Partners Cl A"
  },
  {
    "value": "MDCO",
    "label": "MDCO - Medicines Co"
  },
  {
    "value": "MDGL",
    "label": "MDGL - Madrigal Pharmaceuticals Inc"
  },
  {
    "value": "MDGS",
    "label": "MDGS - Medigus Ltd Ads"
  },
  {
    "value": "MDIV",
    "label": "MDIV - First Trust Vi Mlti"
  },
  {
    "value": "MDLZ",
    "label": "MDLZ - Mondelez Intl Cmn A"
  },
  {
    "value": "MDRX",
    "label": "MDRX - Allscripts Hlthcare"
  },
  {
    "value": "MDSO",
    "label": "MDSO - Medidata Solutions"
  },
  {
    "value": "MDSY",
    "label": "MDSY - Modsys Int'l Ltd"
  },
  {
    "value": "MDVX",
    "label": "MDVX - Medovex Corp. Cmn"
  },
  {
    "value": "MDVXW",
    "label": "MDVXW - Medovex Cp Cl A Wt"
  },
  {
    "value": "MDWD",
    "label": "MDWD - Mediwound Ltd Ord Sh"
  },
  {
    "value": "MDXG",
    "label": "MDXG - Mimedx Group Inc"
  },
  {
    "value": "MEDP",
    "label": "MEDP - Medpace Holdings Inc."
  },
  {
    "value": "MEET",
    "label": "MEET - The Meet Group"
  },
  {
    "value": "MEIP",
    "label": "MEIP - Mei Pharma Inc Cmn"
  },
  {
    "value": "MELI",
    "label": "MELI - Mercadolibre Inc"
  },
  {
    "value": "MELR",
    "label": "MELR - Melrose Bancorp Cmn"
  },
  {
    "value": "MEMP",
    "label": "MEMP - Memorial Production"
  },
  {
    "value": "MENT",
    "label": "MENT - Mentor Graphics"
  },
  {
    "value": "MEOH",
    "label": "MEOH - Methanex Cp"
  },
  {
    "value": "MERC",
    "label": "MERC - Mercer Intl Inc"
  },
  {
    "value": "MESO",
    "label": "MESO - Mesoblast Ltd Ads"
  },
  {
    "value": "METC",
    "label": "METC - Ramaco Resources Inc"
  },
  {
    "value": "MFIN",
    "label": "MFIN - Medallion Fin Cp"
  },
  {
    "value": "MFINL",
    "label": "MFINL - Medallion Fin Notes"
  },
  {
    "value": "MFNC",
    "label": "MFNC - Mackinac Financial"
  },
  {
    "value": "MFRI",
    "label": "MFRI - M F R I Inc"
  },
  {
    "value": "MFSF",
    "label": "MFSF - Mutualfirst Finl Inc"
  },
  {
    "value": "MGCD",
    "label": "MGCD - Mgc Diagnostics Corp"
  },
  {
    "value": "MGEE",
    "label": "MGEE - Mge Energy Inc"
  },
  {
    "value": "MGEN",
    "label": "MGEN - Miragen Therapeutics Inc"
  },
  {
    "value": "MGI",
    "label": "MGI - Moneygram Intl Cmn"
  },
  {
    "value": "MGIC",
    "label": "MGIC - Magic Software Entpr"
  },
  {
    "value": "MGLN",
    "label": "MGLN - Magellan Health Cmn"
  },
  {
    "value": "MGNX",
    "label": "MGNX - Macrogenics Cmn"
  },
  {
    "value": "MGPI",
    "label": "MGPI - MGP Ingredients Inc"
  },
  {
    "value": "MGRC",
    "label": "MGRC - Mcgrath Rentcorp"
  },
  {
    "value": "MGYR",
    "label": "MGYR - Magyar Bancorp Inc"
  },
  {
    "value": "MHLD",
    "label": "MHLD - Maiden Holdings Ltd"
  },
  {
    "value": "MICT",
    "label": "MICT - Micronet Enertec Tec"
  },
  {
    "value": "MICTW",
    "label": "MICTW - Micronet Enertec Wrt"
  },
  {
    "value": "MIDD",
    "label": "MIDD - Middleby Corp"
  },
  {
    "value": "MIII",
    "label": "MIII - M III Acquisition Corp"
  },
  {
    "value": "MIIIU",
    "label": "MIIIU - M III Acquisition"
  },
  {
    "value": "MIIIW",
    "label": "MIIIW - M III Acquisition Corp. Wt"
  },
  {
    "value": "MIK",
    "label": "MIK - The Michaels Comp Cmn"
  },
  {
    "value": "MILN",
    "label": "MILN - Glbl X Mlnls Thm ETF"
  },
  {
    "value": "MIME",
    "label": "MIME - Mimecast Limited Ord"
  },
  {
    "value": "MIND",
    "label": "MIND - Mitcham Inds Inc"
  },
  {
    "value": "MINDP",
    "label": "MINDP - Mitcham Industries Inc"
  },
  {
    "value": "MINI",
    "label": "MINI - Mobile Mini Inc"
  },
  {
    "value": "MIRN",
    "label": "MIRN - Mirna Therap Cmn Stk"
  },
  {
    "value": "MITK",
    "label": "MITK - Mitek Systems Inc"
  },
  {
    "value": "MITL",
    "label": "MITL - Mitel Networks Corp"
  },
  {
    "value": "MKSI",
    "label": "MKSI - Mks Instruments Inc"
  },
  {
    "value": "MKTX",
    "label": "MKTX - Marketaxess Holdings"
  },
  {
    "value": "MLAB",
    "label": "MLAB - Mesa Labs Inc"
  },
  {
    "value": "MLCO",
    "label": "MLCO - Melco Resorts & Entertainment"
  },
  {
    "value": "MLHR",
    "label": "MLHR - Miller Herman Inc"
  },
  {
    "value": "MLNK",
    "label": "MLNK - Moduslink Global Cmn"
  },
  {
    "value": "MLNX",
    "label": "MLNX - Mellanox Technologie"
  },
  {
    "value": "MLVF",
    "label": "MLVF - Malvern Bncp Cmn Stk"
  },
  {
    "value": "MMAC",
    "label": "MMAC - Mma Capital Mngt Cmn"
  },
  {
    "value": "MMLP",
    "label": "MMLP - Martin Midstrm LP"
  },
  {
    "value": "MMSI",
    "label": "MMSI - Merit Medical Sys"
  },
  {
    "value": "MMYT",
    "label": "MMYT - Makemytrip Limited"
  },
  {
    "value": "MNDO",
    "label": "MNDO - Mind C.T.I. Ltd"
  },
  {
    "value": "MNGA",
    "label": "MNGA - Magnegas Corporation"
  },
  {
    "value": "MNKD",
    "label": "MNKD - Mannkind Corporation"
  },
  {
    "value": "MNOV",
    "label": "MNOV - Medicinova Inc"
  },
  {
    "value": "MNRO",
    "label": "MNRO - Monro Muffler Brak"
  },
  {
    "value": "MNST",
    "label": "MNST - Monster Beverage Cp"
  },
  {
    "value": "MNTA",
    "label": "MNTA - Momenta Pharma"
  },
  {
    "value": "MNTX",
    "label": "MNTX - Manitex Intl Inc"
  },
  {
    "value": "MOBL",
    "label": "MOBL - Mobileiron Inc Cmn"
  },
  {
    "value": "MOCO",
    "label": "MOCO - Mocon Inc"
  },
  {
    "value": "MOFG",
    "label": "MOFG - Midwestone Fnl Gp"
  },
  {
    "value": "MOGLC",
    "label": "MOGLC - Gabelli Nextshares Trust Gabelli Media Mogul Nex"
  },
  {
    "value": "MOMO",
    "label": "MOMO - Momo Inc Ads"
  },
  {
    "value": "MORN",
    "label": "MORN - Morningstar Inc"
  },
  {
    "value": "MOSY",
    "label": "MOSY - Mosys Inc"
  },
  {
    "value": "MOXC",
    "label": "MOXC - Moxian Inc"
  },
  {
    "value": "MPAA",
    "label": "MPAA - Motorcar Parts Amer"
  },
  {
    "value": "MPACU",
    "label": "MPACU - Matlin & Partners Acquisition Corporation Units"
  },
  {
    "value": "MPB",
    "label": "MPB - Mid Penn Bancorp Inc"
  },
  {
    "value": "MPCT",
    "label": "MPCT - Ishrs Su MSCI Glb Im"
  },
  {
    "value": "MPEL",
    "label": "MPEL - Melco Crown Entm Ads"
  },
  {
    "value": "MPVD",
    "label": "MPVD - Mountain Prv Dmds"
  },
  {
    "value": "MPWR",
    "label": "MPWR - Monolithic Power Sys"
  },
  {
    "value": "MRAM",
    "label": "MRAM - Everspin Technologies Inc"
  },
  {
    "value": "MRCC",
    "label": "MRCC - Monroe Capital Corpo"
  },
  {
    "value": "MRCY",
    "label": "MRCY - Mercury Sys Inc"
  },
  {
    "value": "MRDN",
    "label": "MRDN - Meridian Waste Solutions Inc"
  },
  {
    "value": "MRDNW",
    "label": "MRDNW - Meridian Waste Solutions Inc Warrants"
  },
  {
    "value": "MRLN",
    "label": "MRLN - Marlin Business Serv"
  },
  {
    "value": "MRNS",
    "label": "MRNS - Marinus Pharma CS"
  },
  {
    "value": "MRTN",
    "label": "MRTN - Marten Transport L"
  },
  {
    "value": "MRTX",
    "label": "MRTX - Mirati Therapeutics"
  },
  {
    "value": "MRUS",
    "label": "MRUS - Merus N.V. CS"
  },
  {
    "value": "MRVC",
    "label": "MRVC - Mrv Communictns Cmn"
  },
  {
    "value": "MRVL",
    "label": "MRVL - Marvell Tech Group"
  },
  {
    "value": "MSBF",
    "label": "MSBF - MSB Financial Cmn"
  },
  {
    "value": "MSBI",
    "label": "MSBI - Midland Sts BNC Cmn"
  },
  {
    "value": "MSCC",
    "label": "MSCC - Microsemi Corp"
  },
  {
    "value": "MSDI",
    "label": "MSDI - Monster Digital Inc"
  },
  {
    "value": "MSDIW",
    "label": "MSDIW - Monster Digital [Warrants]"
  },
  {
    "value": "MSEX",
    "label": "MSEX - Middlesex Water Co"
  },
  {
    "value": "MSFG",
    "label": "MSFG - Mainsource Finl Grp"
  },
  {
    "value": "MSFT",
    "label": "MSFT - Microsoft Corp"
  },
  {
    "value": "MSLI",
    "label": "MSLI - Merus Labs Intl Inc"
  },
  {
    "value": "MSON",
    "label": "MSON - Misonix Inc"
  },
  {
    "value": "MSTR",
    "label": "MSTR - Microstrategy Cl A"
  },
  {
    "value": "MTBC",
    "label": "MTBC - Medical Transc Bl Cmn"
  },
  {
    "value": "MTBCP",
    "label": "MTBCP - Mtbc 11% Sr A Prf ST"
  },
  {
    "value": "MTCH",
    "label": "MTCH - Match Group Inc CS"
  },
  {
    "value": "MTEX",
    "label": "MTEX - Mannatech Inc"
  },
  {
    "value": "MTFB",
    "label": "MTFB - Motif Bio Plc"
  },
  {
    "value": "MTFBW",
    "label": "MTFBW - Motif Bio Plc Warrants To Purchase Adrs"
  },
  {
    "value": "MTGE",
    "label": "MTGE - American Cap Mtg Inv"
  },
  {
    "value": "MTGEP",
    "label": "MTGEP - Amrcn Cap Mt Sr A PS"
  },
  {
    "value": "MTLS",
    "label": "MTLS - Materialise Nv Ads"
  },
  {
    "value": "MTP",
    "label": "MTP - Midatech Pharma Ads"
  },
  {
    "value": "MTRX",
    "label": "MTRX - Matrix Service Co"
  },
  {
    "value": "MTSC",
    "label": "MTSC - M T S Systems Cp"
  },
  {
    "value": "MTSI",
    "label": "MTSI - Macom Technology S"
  },
  {
    "value": "MTSL",
    "label": "MTSL - M E R Tlmgt Sol"
  },
  {
    "value": "MU",
    "label": "MU - Micron Technology"
  },
  {
    "value": "MVIS",
    "label": "MVIS - Microvision"
  },
  {
    "value": "MXIM",
    "label": "MXIM - Maxim Integrated"
  },
  {
    "value": "MXPT",
    "label": "MXPT - Maxpoint Intrctv Cmn"
  },
  {
    "value": "MXWL",
    "label": "MXWL - Maxwell Technologies"
  },
  {
    "value": "MYGN",
    "label": "MYGN - Myriad Genetics Inc"
  },
  {
    "value": "MYL",
    "label": "MYL - Mylan Nv Ord Shs"
  },
  {
    "value": "MYOK",
    "label": "MYOK - Myokardia Inc Cm ST"
  },
  {
    "value": "MYOS",
    "label": "MYOS - Myos Rens Tech Cmn"
  },
  {
    "value": "MYRG",
    "label": "MYRG - Myr Group Inc"
  },
  {
    "value": "MYSZ",
    "label": "MYSZ - My Size Inc Cmn"
  },
  {
    "value": "MZOR",
    "label": "MZOR - Mazor Robotics Ads"
  },
  {
    "value": "NAII",
    "label": "NAII - Natural Alternativ"
  },
  {
    "value": "NAKD",
    "label": "NAKD - Naked Brand Group CS"
  },
  {
    "value": "NAME",
    "label": "NAME - Rightside Group Cmn"
  },
  {
    "value": "NANO",
    "label": "NANO - Nanometrics Inc"
  },
  {
    "value": "NATH",
    "label": "NATH - Nathan's Famous In"
  },
  {
    "value": "NATI",
    "label": "NATI - Natl Instruments Cor"
  },
  {
    "value": "NATR",
    "label": "NATR - Nature S Sunshine"
  },
  {
    "value": "NAUH",
    "label": "NAUH - National American Un"
  },
  {
    "value": "NAVG",
    "label": "NAVG - Navigators Grp Inc"
  },
  {
    "value": "NAVI",
    "label": "NAVI - Navient Cp Cmn"
  },
  {
    "value": "NBEV",
    "label": "NBEV - New Age Beverages Corp"
  },
  {
    "value": "NBIX",
    "label": "NBIX - Neurocrine Bioscienc"
  },
  {
    "value": "NBN",
    "label": "NBN - Northeast Bncp"
  },
  {
    "value": "NBRV",
    "label": "NBRV - Nabriva Therape Ads"
  },
  {
    "value": "NBTB",
    "label": "NBTB - NBT Bancorp Inc"
  },
  {
    "value": "NCBS",
    "label": "NCBS - Nicolet Bnkshr Cmn"
  },
  {
    "value": "NCIT",
    "label": "NCIT - NCI Inc"
  },
  {
    "value": "NCLH",
    "label": "NCLH - Norwegian Cruise Ord"
  },
  {
    "value": "NCMI",
    "label": "NCMI - National Cinemedia"
  },
  {
    "value": "NCOM",
    "label": "NCOM - National Commerce Cmn"
  },
  {
    "value": "NCTY",
    "label": "NCTY - The9 Limited"
  },
  {
    "value": "NDAQ",
    "label": "NDAQ - Nasdaq Inc Cmn Stk"
  },
  {
    "value": "NDLS",
    "label": "NDLS - Noodles & Co Cla Cmn"
  },
  {
    "value": "NDRM",
    "label": "NDRM - Neuroderm Ltd Ord Sh"
  },
  {
    "value": "NDSN",
    "label": "NDSN - Nordson Corporation"
  },
  {
    "value": "NEO",
    "label": "NEO - Neogenomics Inc"
  },
  {
    "value": "NEOG",
    "label": "NEOG - Neogen Cp"
  },
  {
    "value": "NEON",
    "label": "NEON - Neonode Inc"
  },
  {
    "value": "NEOS",
    "label": "NEOS - Neos Therapeutics Cmn"
  },
  {
    "value": "NEOT",
    "label": "NEOT - Neothetics Cmn"
  },
  {
    "value": "NEPT",
    "label": "NEPT - Neptune Tech"
  },
  {
    "value": "NERV",
    "label": "NERV - Minerva Neuroscie Cmn"
  },
  {
    "value": "NETE",
    "label": "NETE - Net Element Inc"
  },
  {
    "value": "NEWS",
    "label": "NEWS - Newstar Financial"
  },
  {
    "value": "NEWT",
    "label": "NEWT - Newtek Bus Svcs Cmn"
  },
  {
    "value": "NEWTL",
    "label": "NEWTL - Newtek Business 7%Nt"
  },
  {
    "value": "NEWTZ",
    "label": "NEWTZ - Newtek 7.5% NTS 2022"
  },
  {
    "value": "NFBK",
    "label": "NFBK - Northfield Bncrp Del"
  },
  {
    "value": "NFEC",
    "label": "NFEC - NF Energy Saving Cor"
  },
  {
    "value": "NFLX",
    "label": "NFLX - Netflix Inc"
  },
  {
    "value": "NGHC",
    "label": "NGHC - National General Hld"
  },
  {
    "value": "NGHCN",
    "label": "NGHCN - National General Holdings Corp"
  },
  {
    "value": "NGHCO",
    "label": "NGHCO - National Gnl Hld Ds"
  },
  {
    "value": "NGHCP",
    "label": "NGHCP - National Gen Srs A"
  },
  {
    "value": "NGHCZ",
    "label": "NGHCZ - National Gen Sub NTS"
  },
  {
    "value": "NH",
    "label": "NH - Nanthealth Inc Cmn"
  },
  {
    "value": "NHLD",
    "label": "NHLD - National Holdings"
  },
  {
    "value": "NHLDW",
    "label": "NHLDW - National Holdings Corporation Warrants"
  },
  {
    "value": "NHTC",
    "label": "NHTC - Natural Hlth Trd Cmn"
  },
  {
    "value": "NICE",
    "label": "NICE - Nice Ltd"
  },
  {
    "value": "NICK",
    "label": "NICK - Nicholas Fincl Inc"
  },
  {
    "value": "NIHD",
    "label": "NIHD - NII Holdings Cmn"
  },
  {
    "value": "NK",
    "label": "NK - Nantkwest Inc CS"
  },
  {
    "value": "NKSH",
    "label": "NKSH - Natl Bankshares Inc"
  },
  {
    "value": "NKTR",
    "label": "NKTR - Nektar Therapeutics"
  },
  {
    "value": "NLNK",
    "label": "NLNK - Newlink Genetics Cor"
  },
  {
    "value": "NLST",
    "label": "NLST - Netlist Inc"
  },
  {
    "value": "NMIH",
    "label": "NMIH - Nmi Holdings Cmn A"
  },
  {
    "value": "NMRX",
    "label": "NMRX - Numerex Cp Cl A [P"
  },
  {
    "value": "NNBR",
    "label": "NNBR - NN Inc"
  },
  {
    "value": "NNDM",
    "label": "NNDM - Nano Dimension Ads"
  },
  {
    "value": "NODK",
    "label": "NODK - Ni Holdings Inc. Common Stock"
  },
  {
    "value": "NOVN",
    "label": "NOVN - Novan Inc"
  },
  {
    "value": "NOVT",
    "label": "NOVT - Novanta Inc"
  },
  {
    "value": "NRCIA",
    "label": "NRCIA - National Resh Cla Cmn"
  },
  {
    "value": "NRCIB",
    "label": "NRCIB - Natl Research Cl B"
  },
  {
    "value": "NRIM",
    "label": "NRIM - Northrim Bancorp Inc"
  },
  {
    "value": "NSEC",
    "label": "NSEC - Natl Security Gp I"
  },
  {
    "value": "NSIT",
    "label": "NSIT - Insight Enterpr"
  },
  {
    "value": "NSSC",
    "label": "NSSC - Napco Sec Tech Inc"
  },
  {
    "value": "NSTG",
    "label": "NSTG - Nanostring Tech Cmn"
  },
  {
    "value": "NSYS",
    "label": "NSYS - Nortech Systems In"
  },
  {
    "value": "NTAP",
    "label": "NTAP - Netapp Inc"
  },
  {
    "value": "NTCT",
    "label": "NTCT - Netscout Systems I"
  },
  {
    "value": "NTEC",
    "label": "NTEC - Intec Pharma Ord Shr"
  },
  {
    "value": "NTES",
    "label": "NTES - Netease Inc Ads"
  },
  {
    "value": "NTGR",
    "label": "NTGR - Netgear Inc"
  },
  {
    "value": "NTIC",
    "label": "NTIC - Northern Tech Inc"
  },
  {
    "value": "NTLA",
    "label": "NTLA - Intellia Thera CS"
  },
  {
    "value": "NTNX",
    "label": "NTNX - Nutanix Inc"
  },
  {
    "value": "NTRA",
    "label": "NTRA - Natera Inc"
  },
  {
    "value": "NTRI",
    "label": "NTRI - Nutrisystem Inc"
  },
  {
    "value": "NTRP",
    "label": "NTRP - Neurotrope Inc"
  },
  {
    "value": "NTRS",
    "label": "NTRS - Northern Trust Corp"
  },
  {
    "value": "NTRSP",
    "label": "NTRSP - Northern TR Dep Shs"
  },
  {
    "value": "NTWK",
    "label": "NTWK - Netsol Tech Inc"
  },
  {
    "value": "NUAN",
    "label": "NUAN - Nuance Communicatns"
  },
  {
    "value": "NURO",
    "label": "NURO - Neurometrix Inc"
  },
  {
    "value": "NUROW",
    "label": "NUROW - Neurometrix Inc Wt"
  },
  {
    "value": "NUTR",
    "label": "NUTR - Nutraceutical Intl"
  },
  {
    "value": "NUVA",
    "label": "NUVA - Nuvasive Inc"
  },
  {
    "value": "NVAX",
    "label": "NVAX - Novavax Inc"
  },
  {
    "value": "NVCN",
    "label": "NVCN - Neovasc Inc"
  },
  {
    "value": "NVCR",
    "label": "NVCR - Novocure Ltd Ord Sh"
  },
  {
    "value": "NVDA",
    "label": "NVDA - Nvidia Corporation"
  },
  {
    "value": "NVDQ",
    "label": "NVDQ - Novadaq Technologies"
  },
  {
    "value": "NVEC",
    "label": "NVEC - Nve Corp"
  },
  {
    "value": "NVEE",
    "label": "NVEE - Nv5 Global Cmn"
  },
  {
    "value": "NVET",
    "label": "NVET - Nexvet Biopharma Ord"
  },
  {
    "value": "NVFY",
    "label": "NVFY - Nova Lifestyle Inc"
  },
  {
    "value": "NVGN",
    "label": "NVGN - Novogen Ltd Ads"
  },
  {
    "value": "NVIV",
    "label": "NVIV - Invivo Theraptc Cmn"
  },
  {
    "value": "NVLN",
    "label": "NVLN - Novelion Therapeutics Inc"
  },
  {
    "value": "NVLS",
    "label": "NVLS - Nivalis Thera Cmn ST"
  },
  {
    "value": "NVMI",
    "label": "NVMI - Nova Measuring Instr"
  },
  {
    "value": "NVTR",
    "label": "NVTR - Nuvectra Corp Cmn ST"
  },
  {
    "value": "NWBI",
    "label": "NWBI - Northwest Bancshares"
  },
  {
    "value": "NWFL",
    "label": "NWFL - Norwood Financial Cp"
  },
  {
    "value": "NWLI",
    "label": "NWLI - Natl Wstrn Life Gp A"
  },
  {
    "value": "NWPX",
    "label": "NWPX - Northwest Pipe Co"
  },
  {
    "value": "NWS",
    "label": "NWS - News Cp Cl B Cmn ST"
  },
  {
    "value": "NWSA",
    "label": "NWSA - News Cp Cl A Cmn ST"
  },
  {
    "value": "NXEO",
    "label": "NXEO - Nexeo Solutions Inc"
  },
  {
    "value": "NXEOU",
    "label": "NXEOU - Nexeo Solutions Inc"
  },
  {
    "value": "NXEOW",
    "label": "NXEOW - Nexeo Solutions Inc"
  },
  {
    "value": "NXPI",
    "label": "NXPI - Nxp Semiconductors"
  },
  {
    "value": "NXST",
    "label": "NXST - Nexstar Broadcasting"
  },
  {
    "value": "NXTD",
    "label": "NXTD - Nxt-Id Inc Cmn Stk"
  },
  {
    "value": "NXTDW",
    "label": "NXTDW - Nxt-Id Inc Warrant"
  },
  {
    "value": "NXTM",
    "label": "NXTM - Nxstage Medical Inc"
  },
  {
    "value": "NYMT",
    "label": "NYMT - New York Mtge Trust"
  },
  {
    "value": "NYMTO",
    "label": "NYMTO - New York Mort 7.875"
  },
  {
    "value": "NYMTP",
    "label": "NYMTP - New York Mrtg 7.75 B"
  },
  {
    "value": "NYMX",
    "label": "NYMX - Nymox Pharm Corp"
  },
  {
    "value": "NYNY",
    "label": "NYNY - Empire Resorts Inc"
  },
  {
    "value": "OACQ",
    "label": "OACQ - Origo Acquisition Corp"
  },
  {
    "value": "OACQR",
    "label": "OACQR - Origo Acquisition Corp"
  },
  {
    "value": "OACQW",
    "label": "OACQW - Origo Acquisition Corp"
  },
  {
    "value": "OASM",
    "label": "OASM - Oasmia Pharmaceu Ads"
  },
  {
    "value": "OBAS",
    "label": "OBAS - Optibase Ltd"
  },
  {
    "value": "OBCI",
    "label": "OBCI - Ocean Bio Chem Inc"
  },
  {
    "value": "OBLN",
    "label": "OBLN - Obalon Therapeutics Inc"
  },
  {
    "value": "OBSV",
    "label": "OBSV - Obseva Sa Ordinary Shares"
  },
  {
    "value": "OCC",
    "label": "OCC - Optical Cable Corp"
  },
  {
    "value": "OCFC",
    "label": "OCFC - Oceanfirst Finl Corp"
  },
  {
    "value": "OCLR",
    "label": "OCLR - Oclaro Inc"
  },
  {
    "value": "OCRX",
    "label": "OCRX - Ocera Therapeutics"
  },
  {
    "value": "OCUL",
    "label": "OCUL - Ocular Therapeut Cmn"
  },
  {
    "value": "ODFL",
    "label": "ODFL - Old Dominion Freig"
  },
  {
    "value": "ODP",
    "label": "ODP - Office Depot Cmn"
  },
  {
    "value": "OESX",
    "label": "OESX - Orion Energy Syst Cmn"
  },
  {
    "value": "OFED",
    "label": "OFED - Oconee Fed Fin Corp"
  },
  {
    "value": "OFIX",
    "label": "OFIX - Orthofix Intl Nv"
  },
  {
    "value": "OFLX",
    "label": "OFLX - Omega Flex Inc"
  },
  {
    "value": "OFS",
    "label": "OFS - Ofs Capital Corporat"
  },
  {
    "value": "OGXI",
    "label": "OGXI - Oncogenex Pharma"
  },
  {
    "value": "OHAI",
    "label": "OHAI - Oha Investmnt Cp Cmn"
  },
  {
    "value": "OHGI",
    "label": "OHGI - One Horizon Grp Cmn"
  },
  {
    "value": "OHRP",
    "label": "OHRP - Ohr Pharmceutial Cmn"
  },
  {
    "value": "OIIM",
    "label": "OIIM - O2Micro Intl Ltd"
  },
  {
    "value": "OKSB",
    "label": "OKSB - Southwest Bncp Inc"
  },
  {
    "value": "OLBK",
    "label": "OLBK - Old Line Bancshs MD"
  },
  {
    "value": "OLD",
    "label": "OLD - The Long-Term Care ETF"
  },
  {
    "value": "OLED",
    "label": "OLED - Universal Display"
  },
  {
    "value": "OLLI",
    "label": "OLLI - Ollies Bargain CS"
  },
  {
    "value": "OMAB",
    "label": "OMAB - Grupo Aeroportuario"
  },
  {
    "value": "OMCL",
    "label": "OMCL - Omnicell Inc"
  },
  {
    "value": "OMED",
    "label": "OMED - Oncomed Pharma"
  },
  {
    "value": "OMER",
    "label": "OMER - Omeros Corporation"
  },
  {
    "value": "OMEX",
    "label": "OMEX - Odyssey Marine Expl"
  },
  {
    "value": "OMNT",
    "label": "OMNT - Ominto Inc"
  },
  {
    "value": "ON",
    "label": "ON - On Semiconductor"
  },
  {
    "value": "ONB",
    "label": "ONB - Old National Bncp Cmn"
  },
  {
    "value": "ONCE",
    "label": "ONCE - Spark Therap Cmn"
  },
  {
    "value": "ONCS",
    "label": "ONCS - Oncosec Medical Cmn"
  },
  {
    "value": "ONEQ",
    "label": "ONEQ - Nasdaq Comp Ndx Fund"
  },
  {
    "value": "ONS",
    "label": "ONS - Oncobiologics Inc"
  },
  {
    "value": "ONSIW",
    "label": "ONSIW - Oncobiologics Inc"
  },
  {
    "value": "ONSIZ",
    "label": "ONSIZ - Oncobiologics Inc"
  },
  {
    "value": "ONTX",
    "label": "ONTX - Onconova Therapeutic"
  },
  {
    "value": "ONTXW",
    "label": "ONTXW - Onconova Therapeutics Inc"
  },
  {
    "value": "ONVI",
    "label": "ONVI - Onvia Inc"
  },
  {
    "value": "ONVO",
    "label": "ONVO - Organovo Holdings"
  },
  {
    "value": "OPB",
    "label": "OPB - Opus Bank Cmn Stk"
  },
  {
    "value": "OPGN",
    "label": "OPGN - Opgen Inc Cmn Stk"
  },
  {
    "value": "OPGNW",
    "label": "OPGNW - Opgen Inc Warrant"
  },
  {
    "value": "OPHC",
    "label": "OPHC - Optimumbank Hldgs"
  },
  {
    "value": "OPHT",
    "label": "OPHT - Ophthotech Corp Cmn"
  },
  {
    "value": "OPK",
    "label": "OPK - Opko Health Inc"
  },
  {
    "value": "OPOF",
    "label": "OPOF - Old Point Finl Cp"
  },
  {
    "value": "OPTT",
    "label": "OPTT - Ocean Power Tech Inc"
  },
  {
    "value": "OPXA",
    "label": "OPXA - Opexa Therapeutics"
  },
  {
    "value": "OPXAW",
    "label": "OPXAW - Opexa Therap Warrant"
  },
  {
    "value": "ORBC",
    "label": "ORBC - Orbcomm Inc"
  },
  {
    "value": "ORBK",
    "label": "ORBK - Orbotech Ltd"
  },
  {
    "value": "OREX",
    "label": "OREX - Orexigen Therapeutic"
  },
  {
    "value": "ORG",
    "label": "ORG - The Organics ETF"
  },
  {
    "value": "ORIG",
    "label": "ORIG - Ocean Rig Udw Inc"
  },
  {
    "value": "ORIT",
    "label": "ORIT - Oritani Financial"
  },
  {
    "value": "ORLY",
    "label": "ORLY - O'Reilly Automotive"
  },
  {
    "value": "ORMP",
    "label": "ORMP - Oramed Pharma Cmn"
  },
  {
    "value": "ORPN",
    "label": "ORPN - Bio Blast Pharma Ltd"
  },
  {
    "value": "ORRF",
    "label": "ORRF - Orrstown Finl Svcs"
  },
  {
    "value": "OSBC",
    "label": "OSBC - Old Second Bancorp"
  },
  {
    "value": "OSBCP",
    "label": "OSBCP - Old Second Bncp"
  },
  {
    "value": "OSIS",
    "label": "OSIS - O S I Systems Inc"
  },
  {
    "value": "OSN",
    "label": "OSN - Ossen Innovation Co"
  },
  {
    "value": "OSTK",
    "label": "OSTK - Overstock.Com Inc"
  },
  {
    "value": "OSUR",
    "label": "OSUR - Orasure Tech Inc"
  },
  {
    "value": "OTEL",
    "label": "OTEL - Otelco Cl A Cmn"
  },
  {
    "value": "OTEX",
    "label": "OTEX - Open Text Cp"
  },
  {
    "value": "OTIC",
    "label": "OTIC - Otonomy Inc"
  },
  {
    "value": "OTIV",
    "label": "OTIV - On Track Innovations"
  },
  {
    "value": "OTTR",
    "label": "OTTR - Otter Tail Corp"
  },
  {
    "value": "OTTW",
    "label": "OTTW - Ottawa Saving Bcp Il"
  },
  {
    "value": "OVAS",
    "label": "OVAS - Ovascience Cmn Stk"
  },
  {
    "value": "OVBC",
    "label": "OVBC - Ohio Valley Banc Cp"
  },
  {
    "value": "OVLY",
    "label": "OVLY - Oak Valley Bancp CA"
  },
  {
    "value": "OXBR",
    "label": "OXBR - Oxbridge Ord Shrs"
  },
  {
    "value": "OXBRW",
    "label": "OXBRW - Oxbridge Warrants"
  },
  {
    "value": "OXFD",
    "label": "OXFD - Oxford Immunotec"
  },
  {
    "value": "OXLC",
    "label": "OXLC - Oxford Lane Capital"
  },
  {
    "value": "OXLCN",
    "label": "OXLCN - Oxford Lane 8.125 Pf"
  },
  {
    "value": "OXLCO",
    "label": "OXLCO - Oxford Lane Cap 7.5"
  },
  {
    "value": "OZRK",
    "label": "OZRK - Bank of The Ozarks"
  },
  {
    "value": "PAAC",
    "label": "PAAC - Pacific Spec Acq Ord"
  },
  {
    "value": "PAACR",
    "label": "PAACR - Pacific Spc Aq Right"
  },
  {
    "value": "PAACU",
    "label": "PAACU - Pacific Spc Acq Unit"
  },
  {
    "value": "PAACW",
    "label": "PAACW - Pacific Spc Acq Wrnt"
  },
  {
    "value": "PAAS",
    "label": "PAAS - Pan Amer Silver Corp"
  },
  {
    "value": "PACB",
    "label": "PACB - Pacific Biosciences"
  },
  {
    "value": "PACW",
    "label": "PACW - Pacwest Bancorp"
  },
  {
    "value": "PAGG",
    "label": "PAGG - Powershares Global A"
  },
  {
    "value": "PAHC",
    "label": "PAHC - Phibro Anl Htlh A Cmn"
  },
  {
    "value": "PANL",
    "label": "PANL - Pangaea Logistics So"
  },
  {
    "value": "PATI",
    "label": "PATI - Patriot TR HD Cmn"
  },
  {
    "value": "PATK",
    "label": "PATK - Patrick Inds Inc"
  },
  {
    "value": "PAVM",
    "label": "PAVM - Pavmed Inc Cmn"
  },
  {
    "value": "PAVMW",
    "label": "PAVMW - Pavmed Inc Wt"
  },
  {
    "value": "PAYX",
    "label": "PAYX - Paychex Inc"
  },
  {
    "value": "PBBI",
    "label": "PBBI - Pb Bancorp Inc"
  },
  {
    "value": "PBCT",
    "label": "PBCT - People's United Finl"
  },
  {
    "value": "PBCTP",
    "label": "PBCTP - Peoples Utd Finl Inc"
  },
  {
    "value": "PBHC",
    "label": "PBHC - Pathfinder Bcp MD"
  },
  {
    "value": "PBIB",
    "label": "PBIB - Porter Bancorp Inc"
  },
  {
    "value": "PBIP",
    "label": "PBIP - Prudential Bancorp"
  },
  {
    "value": "PBMD",
    "label": "PBMD - Prima Biomed Ltd"
  },
  {
    "value": "PBNC",
    "label": "PBNC - Paragon Commercial Corporation"
  },
  {
    "value": "PBPB",
    "label": "PBPB - Potbelly Corp Cmn"
  },
  {
    "value": "PBSK",
    "label": "PBSK - Poage Bankshares Inc"
  },
  {
    "value": "PBYI",
    "label": "PBYI - Puma Biotechnology"
  },
  {
    "value": "PCAR",
    "label": "PCAR - Paccar Inc"
  },
  {
    "value": "PCBK",
    "label": "PCBK - Pacific Continental"
  },
  {
    "value": "PCH",
    "label": "PCH - Potlatch Cp"
  },
  {
    "value": "PCLN",
    "label": "PCLN - Priceline Group"
  },
  {
    "value": "PCMI",
    "label": "PCMI - PCM Inc"
  },
  {
    "value": "PCO",
    "label": "PCO - Pendrell Corporation"
  },
  {
    "value": "PCOM",
    "label": "PCOM - Points Intl Ltd"
  },
  {
    "value": "PCRX",
    "label": "PCRX - Pacira Pharm Inc"
  },
  {
    "value": "PCTI",
    "label": "PCTI - Pc-Tel Inc"
  },
  {
    "value": "PCTY",
    "label": "PCTY - Paylocity Hldng Corp"
  },
  {
    "value": "PCYG",
    "label": "PCYG - Park City Group Cmn"
  },
  {
    "value": "PCYO",
    "label": "PCYO - Pure Cycle Corp"
  },
  {
    "value": "PDBC",
    "label": "PDBC - PS DB Optimum Yield Diversified Commodity Strate"
  },
  {
    "value": "PDCE",
    "label": "PDCE - Pdc Energy Inc"
  },
  {
    "value": "PDCO",
    "label": "PDCO - Patterson Companies"
  },
  {
    "value": "PDEX",
    "label": "PDEX - Pro-Dex Inc New"
  },
  {
    "value": "PDFS",
    "label": "PDFS - Pdf Solutions Inc"
  },
  {
    "value": "PDLI",
    "label": "PDLI - Pdl Biopharma Inc"
  },
  {
    "value": "PDP",
    "label": "PDP - Powershares DWA Momentum Portfolio"
  },
  {
    "value": "PDVW",
    "label": "PDVW - Pdvwireless Cmn Stk"
  },
  {
    "value": "PEBK",
    "label": "PEBK - Peoples Bancorp Nc"
  },
  {
    "value": "PEBO",
    "label": "PEBO - Peoples Bancorp Inc"
  },
  {
    "value": "PEGA",
    "label": "PEGA - Pegasystems Inc"
  },
  {
    "value": "PEGI",
    "label": "PEGI - Pattern Energy Cl A"
  },
  {
    "value": "PEIX",
    "label": "PEIX - Pacific Ethanol Inc"
  },
  {
    "value": "PENN",
    "label": "PENN - Penn Natl Gaming Inc"
  },
  {
    "value": "PERF",
    "label": "PERF - Perfumania Hld Inc"
  },
  {
    "value": "PERI",
    "label": "PERI - Perion Network Ltd"
  },
  {
    "value": "PERY",
    "label": "PERY - Perry Ellis Int"
  },
  {
    "value": "PESI",
    "label": "PESI - Perma-Fix Envir"
  },
  {
    "value": "PETS",
    "label": "PETS - Petmed Express Inc"
  },
  {
    "value": "PETX",
    "label": "PETX - Aratana Theraptcs Cmn"
  },
  {
    "value": "PEY",
    "label": "PEY - High-Yield Eq Div Achievers Powershares"
  },
  {
    "value": "PEZ",
    "label": "PEZ - Dynamic Consumer Disc Powershares"
  },
  {
    "value": "PFBC",
    "label": "PFBC - Preferred Bank La"
  },
  {
    "value": "PFBI",
    "label": "PFBI - Premier Finl Bncp"
  },
  {
    "value": "PFBX",
    "label": "PFBX - Peoples Finl Corp"
  },
  {
    "value": "PFI",
    "label": "PFI - Dynamic Financials Powershares"
  },
  {
    "value": "PFIE",
    "label": "PFIE - Profire Energy Cmn"
  },
  {
    "value": "PFIN",
    "label": "PFIN - P F Inds Inc A"
  },
  {
    "value": "PFIS",
    "label": "PFIS - Peoples Finl Svcs Co"
  },
  {
    "value": "PFLT",
    "label": "PFLT - Pennantpark Fltng Rt"
  },
  {
    "value": "PFM",
    "label": "PFM - Dividend Achievers Powershares"
  },
  {
    "value": "PFMT",
    "label": "PFMT - Performant Financial"
  },
  {
    "value": "PFPT",
    "label": "PFPT - Proofpoint Inc"
  },
  {
    "value": "PFSW",
    "label": "PFSW - Pfsweb Inc"
  },
  {
    "value": "PGC",
    "label": "PGC - Peapack Gladstone Fi"
  },
  {
    "value": "PGJ",
    "label": "PGJ - Golden Dragon China Powershares"
  },
  {
    "value": "PGLC",
    "label": "PGLC - Pershing Gold Cmn"
  },
  {
    "value": "PGNX",
    "label": "PGNX - Progenics Pharmaceut"
  },
  {
    "value": "PHII",
    "label": "PHII - PHI Inc"
  },
  {
    "value": "PHIIK",
    "label": "PHIIK - PHI Inc Non-Voting"
  },
  {
    "value": "PHMD",
    "label": "PHMD - Photomedex Inc"
  },
  {
    "value": "PHO",
    "label": "PHO - Water Resources Powershares"
  },
  {
    "value": "PI",
    "label": "PI - Impinj Inc Cmn"
  },
  {
    "value": "PICO",
    "label": "PICO - Pico Holdings Inc"
  },
  {
    "value": "PID",
    "label": "PID - Intl Dividend Achievers Powershares"
  },
  {
    "value": "PIE",
    "label": "PIE - Powershares DWA Emerging Markets Momentum Portfo"
  },
  {
    "value": "PIH",
    "label": "PIH - 1347 Property Ins Cmn"
  },
  {
    "value": "PINC",
    "label": "PINC - Premier Inc Cl A Cmn"
  },
  {
    "value": "PIO",
    "label": "PIO - Global Water Powershares"
  },
  {
    "value": "PIRS",
    "label": "PIRS - Pieris Pharma Cmn"
  },
  {
    "value": "PIZ",
    "label": "PIZ - Powershares DWA Developed Markets Momentum Portf"
  },
  {
    "value": "PKBK",
    "label": "PKBK - Parke Bancorp Inc"
  },
  {
    "value": "PKOH",
    "label": "PKOH - Park Ohio Hldg Cp"
  },
  {
    "value": "PKW",
    "label": "PKW - Buyback Achievers Powershares"
  },
  {
    "value": "PLAB",
    "label": "PLAB - Photronics Inc"
  },
  {
    "value": "PLAY",
    "label": "PLAY - Dave & Buster's Ente"
  },
  {
    "value": "PLBC",
    "label": "PLBC - Plumas Bancorp"
  },
  {
    "value": "PLCE",
    "label": "PLCE - Children's Place Inc"
  },
  {
    "value": "PLKI",
    "label": "PLKI - Popeyes Louisiana"
  },
  {
    "value": "PLPC",
    "label": "PLPC - Preformed Line Prd"
  },
  {
    "value": "PLPM",
    "label": "PLPM - Planet Payment"
  },
  {
    "value": "PLSE",
    "label": "PLSE - Pulse Biosciences CS"
  },
  {
    "value": "PLUG",
    "label": "PLUG - Plug Power Inc"
  },
  {
    "value": "PLUS",
    "label": "PLUS - Eplus Inc"
  },
  {
    "value": "PLW",
    "label": "PLW - 1-30 Laddered Treasury Powershares"
  },
  {
    "value": "PLXS",
    "label": "PLXS - Plexus Cp"
  },
  {
    "value": "PLYA",
    "label": "PLYA - Playa Hotels & Resorts N.V. Ordinary Shares"
  },
  {
    "value": "PLYAW",
    "label": "PLYAW - Playa Hotels & Resorts N.V. Warrants"
  },
  {
    "value": "PMBC",
    "label": "PMBC - Pacific Mercantile"
  },
  {
    "value": "PMD",
    "label": "PMD - Psychemedics"
  },
  {
    "value": "PME",
    "label": "PME - Pingtan Marine"
  },
  {
    "value": "PMPT",
    "label": "PMPT - Etfis Isectors Post-Mpt Growth ETF"
  },
  {
    "value": "PMTS",
    "label": "PMTS - CPI Card Group Cmn"
  },
  {
    "value": "PNBK",
    "label": "PNBK - Patriot Natl Bncp"
  },
  {
    "value": "PNFP",
    "label": "PNFP - Pinnacle Finl Ptnrs"
  },
  {
    "value": "PNK",
    "label": "PNK - Pinnacle Entmt Cmn"
  },
  {
    "value": "PNNT",
    "label": "PNNT - Pennantpark Investme"
  },
  {
    "value": "PNQI",
    "label": "PNQI - PS Nasdaq Internet"
  },
  {
    "value": "PNRA",
    "label": "PNRA - Panera Bread A"
  },
  {
    "value": "PNRG",
    "label": "PNRG - Primeenergy Cp"
  },
  {
    "value": "PNTR",
    "label": "PNTR - Pointer Telocation"
  },
  {
    "value": "PODD",
    "label": "PODD - Insulet Corporation"
  },
  {
    "value": "POLA",
    "label": "POLA - Polar Power Inc."
  },
  {
    "value": "POOL",
    "label": "POOL - Pool Corporation"
  },
  {
    "value": "POPE",
    "label": "POPE - Pope Resource Uts"
  },
  {
    "value": "POWI",
    "label": "POWI - Power Integratn"
  },
  {
    "value": "POWL",
    "label": "POWL - Powell Inds Inc"
  },
  {
    "value": "PPBI",
    "label": "PPBI - Pacific Premier Bncp"
  },
  {
    "value": "PPC",
    "label": "PPC - Pilgrim's Pride Cmn"
  },
  {
    "value": "PPH",
    "label": "PPH - Vaneck Vectors Pharm"
  },
  {
    "value": "PPHM",
    "label": "PPHM - Peregrine Pharma New"
  },
  {
    "value": "PPHMP",
    "label": "PPHMP - Peregrine Pharmaceut"
  },
  {
    "value": "PPIH",
    "label": "PPIH - Perma-Pipe International Holdings Inc."
  },
  {
    "value": "PPSI",
    "label": "PPSI - Pioneer Pwr Sol Cmn"
  },
  {
    "value": "PRAA",
    "label": "PRAA - Pra Group Inc Cmn"
  },
  {
    "value": "PRAH",
    "label": "PRAH - Pra Health Cmn Stk"
  },
  {
    "value": "PRAN",
    "label": "PRAN - Prana Bio Ltd Ads S1"
  },
  {
    "value": "PRCP",
    "label": "PRCP - Perceptron Inc"
  },
  {
    "value": "PRFT",
    "label": "PRFT - Perficient Inc"
  },
  {
    "value": "PRFZ",
    "label": "PRFZ - US 1500 Powershares"
  },
  {
    "value": "PRGS",
    "label": "PRGS - Progress Software"
  },
  {
    "value": "PRGX",
    "label": "PRGX - Prgx Global Inc"
  },
  {
    "value": "PRIM",
    "label": "PRIM - Primoris Services Cp"
  },
  {
    "value": "PRKR",
    "label": "PRKR - Parkervision Inc"
  },
  {
    "value": "PRMW",
    "label": "PRMW - Primo Water Corporat"
  },
  {
    "value": "PRN",
    "label": "PRN - Powershares Dynamic Industrials"
  },
  {
    "value": "PROV",
    "label": "PROV - Provident Financial"
  },
  {
    "value": "PRPH",
    "label": "PRPH - Prophase Labs Inc"
  },
  {
    "value": "PRQR",
    "label": "PRQR - Proqr Therapeutics"
  },
  {
    "value": "PRSC",
    "label": "PRSC - Providence Svc Cp"
  },
  {
    "value": "PRSS",
    "label": "PRSS - Cafepress Inc"
  },
  {
    "value": "PRTA",
    "label": "PRTA - Prothena Corp"
  },
  {
    "value": "PRTK",
    "label": "PRTK - Paratek Pharma Inc"
  },
  {
    "value": "PRTO",
    "label": "PRTO - Proteon Thera Com ST"
  },
  {
    "value": "PRTS",
    "label": "PRTS - U.S. Auto Parts Netw"
  },
  {
    "value": "PRXL",
    "label": "PRXL - Parexel Intl Cp"
  },
  {
    "value": "PSAU",
    "label": "PSAU - Pshs Gbl Gld & Prc M"
  },
  {
    "value": "PSC",
    "label": "PSC - Prospect Resources Ltd"
  },
  {
    "value": "PSCC",
    "label": "PSCC - PS S&P Smallcap Consumer Staples"
  },
  {
    "value": "PSCD",
    "label": "PSCD - PS S&P Smallcap Consumer Discretionary"
  },
  {
    "value": "PSCE",
    "label": "PSCE - PS S&P Smallcap Energy"
  },
  {
    "value": "PSCF",
    "label": "PSCF - PS S&P Smallcap Financials"
  },
  {
    "value": "PSCH",
    "label": "PSCH - PS S&P Smallcap Health Care"
  },
  {
    "value": "PSCI",
    "label": "PSCI - PS S&P Smallcap Industrials"
  },
  {
    "value": "PSCM",
    "label": "PSCM - PS S&P Smallcap Materials"
  },
  {
    "value": "PSCT",
    "label": "PSCT - PS S&P Smallcap Information Technology"
  },
  {
    "value": "PSCU",
    "label": "PSCU - PS S&P Smallcap Utilities"
  },
  {
    "value": "PSDO",
    "label": "PSDO - Presidio Inc. Common Stock"
  },
  {
    "value": "PSDV",
    "label": "PSDV - Psivida Corp Com"
  },
  {
    "value": "PSEC",
    "label": "PSEC - Prospect Capital Cp"
  },
  {
    "value": "PSET",
    "label": "PSET - Prncpl Prce Sttr ETF"
  },
  {
    "value": "PSIX",
    "label": "PSIX - Power Solutns Itl Cmn"
  },
  {
    "value": "PSL",
    "label": "PSL - Dynamic Consumer Staples Powershares"
  },
  {
    "value": "PSMT",
    "label": "PSMT - Pricesmart Inc"
  },
  {
    "value": "PSTB",
    "label": "PSTB - Park Sterling Corpor"
  },
  {
    "value": "PSTI",
    "label": "PSTI - Pluristem Therapeutc"
  },
  {
    "value": "PTC",
    "label": "PTC - Ptc Inc"
  },
  {
    "value": "PTCT",
    "label": "PTCT - Ptc Therapeutics Cmn"
  },
  {
    "value": "PTEN",
    "label": "PTEN - Patterson-Uti Energy"
  },
  {
    "value": "PTF",
    "label": "PTF - Dynamic Technology Powershares"
  },
  {
    "value": "PTGX",
    "label": "PTGX - Protagonist Therapeutics Inc"
  },
  {
    "value": "PTH",
    "label": "PTH - Dynamic Healthcare Powershares"
  },
  {
    "value": "PTI",
    "label": "PTI - Proteostasis Ther Cmn"
  },
  {
    "value": "PTIE",
    "label": "PTIE - Pain Therapeutics"
  },
  {
    "value": "PTLA",
    "label": "PTLA - Portola Pharma Cmn"
  },
  {
    "value": "PTNR",
    "label": "PTNR - Partner Comm Co Ltd"
  },
  {
    "value": "PTSI",
    "label": "PTSI - P A M Transport Sv"
  },
  {
    "value": "PTX",
    "label": "PTX - Pernix Theraptcs Cmn"
  },
  {
    "value": "PTXP",
    "label": "PTXP - Penntex Midstream"
  },
  {
    "value": "PUB",
    "label": "PUB - Peoples Utah Cmn Stk"
  },
  {
    "value": "PUI",
    "label": "PUI - Dynamic Utilities Powershares"
  },
  {
    "value": "PULM",
    "label": "PULM - Pulmatrix Inc"
  },
  {
    "value": "PVAC",
    "label": "PVAC - Penn Va Corp"
  },
  {
    "value": "PVBC",
    "label": "PVBC - Provident Bancorp CS"
  },
  {
    "value": "PVTB",
    "label": "PVTB - Privatebancorp Inc"
  },
  {
    "value": "PVTBP",
    "label": "PVTBP - Privatebncrp Trst IV"
  },
  {
    "value": "PWOD",
    "label": "PWOD - Penns Woods Bancorp"
  },
  {
    "value": "PXI",
    "label": "PXI - Dynamic Energy Powershares"
  },
  {
    "value": "PXLW",
    "label": "PXLW - Pixelworks Inc"
  },
  {
    "value": "PXS",
    "label": "PXS - Pyxis Tankers Cmn"
  },
  {
    "value": "PY",
    "label": "PY - Prncpl Shrhl Yld ETF"
  },
  {
    "value": "PYDS",
    "label": "PYDS - Payment Data Syst Cmn"
  },
  {
    "value": "PYPL",
    "label": "PYPL - Paypal Holdings"
  },
  {
    "value": "PYZ",
    "label": "PYZ - Dynamic Basic Materials Powershares"
  },
  {
    "value": "PZRX",
    "label": "PZRX - Phaserx Inc Cmn"
  },
  {
    "value": "PZZA",
    "label": "PZZA - Papa John's Intl"
  },
  {
    "value": "QABA",
    "label": "QABA - Qtec First Trust ETF"
  },
  {
    "value": "QADA",
    "label": "QADA - Qad Inc"
  },
  {
    "value": "QADB",
    "label": "QADB - Q A D Inc Cl B"
  },
  {
    "value": "QAT",
    "label": "QAT - Ishrs MSCI Qatar Cp"
  },
  {
    "value": "QBAK",
    "label": "QBAK - Qualstar Corp"
  },
  {
    "value": "QCLN",
    "label": "QCLN - First Trust Cl Edg Grn"
  },
  {
    "value": "QCOM",
    "label": "QCOM - Qualcomm Inc"
  },
  {
    "value": "QCRH",
    "label": "QCRH - Qcr Holdings Inc"
  },
  {
    "value": "QDEL",
    "label": "QDEL - Quidel Cp"
  },
  {
    "value": "QGEN",
    "label": "QGEN - Qiagen N.V."
  },
  {
    "value": "QINC",
    "label": "QINC - First TR Rba Ql ETF"
  },
  {
    "value": "QIWI",
    "label": "QIWI - Qiwi Plc ADR"
  },
  {
    "value": "QLC",
    "label": "QLC - Flxshrs US Ql Lg Cap"
  },
  {
    "value": "QLYS",
    "label": "QLYS - Qualys Inc"
  },
  {
    "value": "QNST",
    "label": "QNST - Quinstreet Inc"
  },
  {
    "value": "QPAC",
    "label": "QPAC - Quinpario Acq2 Com"
  },
  {
    "value": "QPACU",
    "label": "QPACU - Quinpario Acq 2 Unit"
  },
  {
    "value": "QPACW",
    "label": "QPACW - Quinpario Acq2 Wrnt"
  },
  {
    "value": "QQEW",
    "label": "QQEW - First Trust Nasdaq-1"
  },
  {
    "value": "QQQ",
    "label": "QQQ - Powershares QQQ"
  },
  {
    "value": "QQQC",
    "label": "QQQC - Global X Nasdaq Chin"
  },
  {
    "value": "QQQX",
    "label": "QQQX - Nuveen Nasdaq 100"
  },
  {
    "value": "QQXT",
    "label": "QQXT - First Trust Ex Tech"
  },
  {
    "value": "QRHC",
    "label": "QRHC - Quest Resource Cmn"
  },
  {
    "value": "QRVO",
    "label": "QRVO - Qorvo Inc Cmn"
  },
  {
    "value": "QSII",
    "label": "QSII - Quality Systems Inc"
  },
  {
    "value": "QTEC",
    "label": "QTEC - First Trust Nasdaq-1"
  },
  {
    "value": "QTNA",
    "label": "QTNA - Quantenna Communications Inc"
  },
  {
    "value": "QTNT",
    "label": "QTNT - Quotient Limited Ord"
  },
  {
    "value": "QUIK",
    "label": "QUIK - Quicklogic Corp"
  },
  {
    "value": "QUMU",
    "label": "QUMU - Qumu Corporation"
  },
  {
    "value": "QURE",
    "label": "QURE - Uniqure N.V."
  },
  {
    "value": "QVCA",
    "label": "QVCA - Liberty Int Qvc Sr A"
  },
  {
    "value": "QVCB",
    "label": "QVCB - Liberty Int Qvc Sr B"
  },
  {
    "value": "QYLD",
    "label": "QYLD - Recon Nq100 Cv Call"
  },
  {
    "value": "RADA",
    "label": "RADA - Rada Electr Inds Ltd"
  },
  {
    "value": "RAIL",
    "label": "RAIL - Freightcar America"
  },
  {
    "value": "RAND",
    "label": "RAND - Rand Capital Cp"
  },
  {
    "value": "RARE",
    "label": "RARE - Ultragenyx Pharmaceu"
  },
  {
    "value": "RARX",
    "label": "RARX - Ra Pharmaceuticals Inc"
  },
  {
    "value": "RAVE",
    "label": "RAVE - Rave Restaurant Grp"
  },
  {
    "value": "RAVN",
    "label": "RAVN - Raven Industries Inc"
  },
  {
    "value": "RBCAA",
    "label": "RBCAA - Republic Bancorp Inc"
  },
  {
    "value": "RBCN",
    "label": "RBCN - Rubicon Technology"
  },
  {
    "value": "RBPAA",
    "label": "RBPAA - Royal Bncsh of Pa"
  },
  {
    "value": "RCII",
    "label": "RCII - Rent-A-Center Inc"
  },
  {
    "value": "RCKY",
    "label": "RCKY - Rocky Brands Inc"
  },
  {
    "value": "RCM",
    "label": "RCM - R1 Rcm Inc."
  },
  {
    "value": "RCMT",
    "label": "RCMT - R C M Tech Inc"
  },
  {
    "value": "RCON",
    "label": "RCON - Recon Technology Lt"
  },
  {
    "value": "RDCM",
    "label": "RDCM - Radcom Ltd"
  },
  {
    "value": "RDHL",
    "label": "RDHL - Redhill Biophrma ADR"
  },
  {
    "value": "RDI",
    "label": "RDI - Reading Intl Cl A"
  },
  {
    "value": "RDIB",
    "label": "RDIB - Reading Intl Cl B"
  },
  {
    "value": "RDNT",
    "label": "RDNT - Radnet Inc"
  },
  {
    "value": "RDUS",
    "label": "RDUS - Radius Health Cmn"
  },
  {
    "value": "RDVY",
    "label": "RDVY - First Trust ETF Vi"
  },
  {
    "value": "RDWR",
    "label": "RDWR - Radware Ltd"
  },
  {
    "value": "RECN",
    "label": "RECN - Resources Connect"
  },
  {
    "value": "REFR",
    "label": "REFR - Research Frontiers"
  },
  {
    "value": "REGI",
    "label": "REGI - Renewable Energy"
  },
  {
    "value": "REGN",
    "label": "REGN - Regeneron Pharmaceutical"
  },
  {
    "value": "REIS",
    "label": "REIS - Reis Inc"
  },
  {
    "value": "RELL",
    "label": "RELL - Richardson Electrncs"
  },
  {
    "value": "RELV",
    "label": "RELV - Reliv Intl Inc"
  },
  {
    "value": "RELY",
    "label": "RELY - Real Industry Cmn"
  },
  {
    "value": "REPH",
    "label": "REPH - Recro Pharma Inc"
  },
  {
    "value": "RESN",
    "label": "RESN - Resonant Inc Cmn Stk"
  },
  {
    "value": "RETA",
    "label": "RETA - Reata Pharma Cla  Cmn"
  },
  {
    "value": "REXX",
    "label": "REXX - Rex Energy Corporati"
  },
  {
    "value": "RFAP",
    "label": "RFAP - Fst Tst Rvrfrt Dy Ap"
  },
  {
    "value": "RFDI",
    "label": "RFDI - First Trust Rvfrnt Ddi"
  },
  {
    "value": "RFEM",
    "label": "RFEM - First Trust Riverfront Dynamic"
  },
  {
    "value": "RFEU",
    "label": "RFEU - First Trust Rvrfr Dy EU"
  },
  {
    "value": "RFIL",
    "label": "RFIL - RF Industries Ltd"
  },
  {
    "value": "RGCO",
    "label": "RGCO - Rgc Resources Inc"
  },
  {
    "value": "RGEN",
    "label": "RGEN - Repligen Cp"
  },
  {
    "value": "RGLD",
    "label": "RGLD - Royal Gold Inc"
  },
  {
    "value": "RGLS",
    "label": "RGLS - Regulus Therapeutics"
  },
  {
    "value": "RGNX",
    "label": "RGNX - Regenxbio Inc Cmn"
  },
  {
    "value": "RGSE",
    "label": "RGSE - Real Goods Solar Inc"
  },
  {
    "value": "RIBT",
    "label": "RIBT - Ricebran Technologie"
  },
  {
    "value": "RIBTW",
    "label": "RIBTW - Ricebrantech Warrant"
  },
  {
    "value": "RICK",
    "label": "RICK - RCI Hospitality Hold"
  },
  {
    "value": "RIGL",
    "label": "RIGL - Rigel Pharmaceutical"
  },
  {
    "value": "RILY",
    "label": "RILY - B. Riley Financl Cmn"
  },
  {
    "value": "RILYL",
    "label": "RILYL - B. Riley Financial Inc"
  },
  {
    "value": "RKDA",
    "label": "RKDA - Arcadia Bio Cmn Stk"
  },
  {
    "value": "RLJE",
    "label": "RLJE - Rlj Entertainment"
  },
  {
    "value": "RLOG",
    "label": "RLOG - Rand Logistics Inc"
  },
  {
    "value": "RMBS",
    "label": "RMBS - Rambus Inc"
  },
  {
    "value": "RMCF",
    "label": "RMCF - Rocky Mt Chocolate"
  },
  {
    "value": "RMGN",
    "label": "RMGN - Rmg Networks Holding"
  },
  {
    "value": "RMR",
    "label": "RMR - The Rmr Grp A Cmn"
  },
  {
    "value": "RMTI",
    "label": "RMTI - Rockwell Medical In"
  },
  {
    "value": "RNDB",
    "label": "RNDB - Randolph Bancorp Inc"
  },
  {
    "value": "RNET",
    "label": "RNET - Rignet Inc"
  },
  {
    "value": "RNST",
    "label": "RNST - Renasant Corporation"
  },
  {
    "value": "RNVA",
    "label": "RNVA - Rennova Health Inc"
  },
  {
    "value": "RNVAZ",
    "label": "RNVAZ - Rennova Health Inc Wt"
  },
  {
    "value": "RNWK",
    "label": "RNWK - Realnetworks Inc"
  },
  {
    "value": "ROBO",
    "label": "ROBO - Robo Glb Rob"
  },
  {
    "value": "ROCK",
    "label": "ROCK - Gibraltar Ind Inc"
  },
  {
    "value": "ROIA",
    "label": "ROIA - Radio One Inc"
  },
  {
    "value": "ROIAK",
    "label": "ROIAK - Radio One Inc Cl D"
  },
  {
    "value": "ROIC",
    "label": "ROIC - Retail Opp Invts Cp"
  },
  {
    "value": "ROKA",
    "label": "ROKA - Roka Bioscience Inc"
  },
  {
    "value": "ROLL",
    "label": "ROLL - RBC Bearings Incorp"
  },
  {
    "value": "ROSG",
    "label": "ROSG - Rosetta Genomics Ltd"
  },
  {
    "value": "ROST",
    "label": "ROST - Ross Stores Inc"
  },
  {
    "value": "RP",
    "label": "RP - Realpage Inc"
  },
  {
    "value": "RPD",
    "label": "RPD - Rapid7 Inc Cmn Stk"
  },
  {
    "value": "RPRX",
    "label": "RPRX - Repros Therapeutics"
  },
  {
    "value": "RPXC",
    "label": "RPXC - Rpx Corporation"
  },
  {
    "value": "RRGB",
    "label": "RRGB - Red Robin Gourm"
  },
  {
    "value": "RRR",
    "label": "RRR - Rd Rock Rsrts Cla Cmn"
  },
  {
    "value": "RSYS",
    "label": "RSYS - Radisys Cp"
  },
  {
    "value": "RTIX",
    "label": "RTIX - Rti Surgical Inc"
  },
  {
    "value": "RTK",
    "label": "RTK - Rentech Cmn Stk"
  },
  {
    "value": "RTNB",
    "label": "RTNB - Root9B Technologies Inc"
  },
  {
    "value": "RTRX",
    "label": "RTRX - Retrophin Inc Cmn"
  },
  {
    "value": "RTTR",
    "label": "RTTR - Ritter Pharmac. Com"
  },
  {
    "value": "RUN",
    "label": "RUN - Sunrun Inc Cmn Stk"
  },
  {
    "value": "RUSHA",
    "label": "RUSHA - Rush Entpr Cl A"
  },
  {
    "value": "RUSHB",
    "label": "RUSHB - Rush Entpr Cl B"
  },
  {
    "value": "RUTH",
    "label": "RUTH - Ruth's Hospitality"
  },
  {
    "value": "RVEN",
    "label": "RVEN - Reven Housing REIT"
  },
  {
    "value": "RVLT",
    "label": "RVLT - Revolution Lgt Tc"
  },
  {
    "value": "RVNC",
    "label": "RVNC - Revance Therapeutics"
  },
  {
    "value": "RVSB",
    "label": "RVSB - Riverview Bancorp"
  },
  {
    "value": "RWLK",
    "label": "RWLK - Rewalk Roboti Ord Sh"
  },
  {
    "value": "RXDX",
    "label": "RXDX - Ignyta Inc Cmn"
  },
  {
    "value": "RXII",
    "label": "RXII - Rxi Pharmaceuticals"
  },
  {
    "value": "RXIIW",
    "label": "RXIIW - Rxi Pharmaceuticals Corporation Warrants Expirin"
  },
  {
    "value": "RYAAY",
    "label": "RYAAY - Ryanair Hldgs Plc"
  },
  {
    "value": "SABR",
    "label": "SABR - Sabre Corporation Cmn"
  },
  {
    "value": "SAEX",
    "label": "SAEX - Saexploration Hldgs"
  },
  {
    "value": "SAFM",
    "label": "SAFM - Sanderson Farms In"
  },
  {
    "value": "SAFT",
    "label": "SAFT - Safety Ins Group Inc"
  },
  {
    "value": "SAGE",
    "label": "SAGE - Sage Therapeutic Com"
  },
  {
    "value": "SAIA",
    "label": "SAIA - Saia Inc"
  },
  {
    "value": "SAJA",
    "label": "SAJA - Sajan Cmn Stk"
  },
  {
    "value": "SAL",
    "label": "SAL - Salisbury Bancorp"
  },
  {
    "value": "SALE",
    "label": "SALE - Retailmenot Inc"
  },
  {
    "value": "SALM",
    "label": "SALM - Salem Media Grp Inc"
  },
  {
    "value": "SAMG",
    "label": "SAMG - Silvercrest Ast Cm A"
  },
  {
    "value": "SANM",
    "label": "SANM - Sanmina Corp"
  },
  {
    "value": "SANW",
    "label": "SANW - S&W Seed Company"
  },
  {
    "value": "SASR",
    "label": "SASR - Sandy Spring Bancorp"
  },
  {
    "value": "SATS",
    "label": "SATS - Echostar Corp"
  },
  {
    "value": "SAUC",
    "label": "SAUC - Diversified Rstrt HD"
  },
  {
    "value": "SAVE",
    "label": "SAVE - Spirit Airlines Inc"
  },
  {
    "value": "SBAC",
    "label": "SBAC - SBA Communications"
  },
  {
    "value": "SBBP",
    "label": "SBBP - Strongbridge Bio Ord"
  },
  {
    "value": "SBBX",
    "label": "SBBX - Sussex Bancorp"
  },
  {
    "value": "SBCF",
    "label": "SBCF - Seacoast Banking Cp"
  },
  {
    "value": "SBCP",
    "label": "SBCP - Sunshine Bancorp Cmn"
  },
  {
    "value": "SBFG",
    "label": "SBFG - Sb Financial Group"
  },
  {
    "value": "SBFGP",
    "label": "SBFGP - Sb Fin Grp Dep Shs"
  },
  {
    "value": "SBGI",
    "label": "SBGI - Sinclair Brdcst A"
  },
  {
    "value": "SBLK",
    "label": "SBLK - Star Bulk Carriers"
  },
  {
    "value": "SBLKL",
    "label": "SBLKL - Strblk 8% Sr Nt 2019"
  },
  {
    "value": "SBNY",
    "label": "SBNY - Signature Bank"
  },
  {
    "value": "SBNYW",
    "label": "SBNYW - Signature Bank Wrnt"
  },
  {
    "value": "SBOT",
    "label": "SBOT - Stellar Biotch Cm ST"
  },
  {
    "value": "SBPH",
    "label": "SBPH - Spring Bank Ph CS"
  },
  {
    "value": "SBRA",
    "label": "SBRA - Sabra REIT"
  },
  {
    "value": "SBRAP",
    "label": "SBRAP - Sabra Hlthcare REIT"
  },
  {
    "value": "SBSI",
    "label": "SBSI - Southside Bancshares"
  },
  {
    "value": "SBUX",
    "label": "SBUX - Starbucks Corp"
  },
  {
    "value": "SCAC",
    "label": "SCAC - Saban Capital Acquisition Corp"
  },
  {
    "value": "SCACU",
    "label": "SCACU - Saban Capital Acquisition Corp. Un"
  },
  {
    "value": "SCACW",
    "label": "SCACW - Saban Capital Acquisition Corp. Warrants"
  },
  {
    "value": "SCAI",
    "label": "SCAI - Surgical Care Affili"
  },
  {
    "value": "SCHL",
    "label": "SCHL - Scholastic Cp"
  },
  {
    "value": "SCHN",
    "label": "SCHN - Schnitzer Steel A"
  },
  {
    "value": "SCKT",
    "label": "SCKT - Socket Mobile"
  },
  {
    "value": "SCLN",
    "label": "SCLN - Sciclone Pharmaceut"
  },
  {
    "value": "SCMP",
    "label": "SCMP - Sucampo Pharma Inc"
  },
  {
    "value": "SCON",
    "label": "SCON - Superconductor Tech"
  },
  {
    "value": "SCSC",
    "label": "SCSC - Scansource Inc"
  },
  {
    "value": "SCSS",
    "label": "SCSS - Select Comfort Cp"
  },
  {
    "value": "SCVL",
    "label": "SCVL - Shoe Carnival Inc"
  },
  {
    "value": "SCWX",
    "label": "SCWX - Secureworks Corp CS"
  },
  {
    "value": "SCYX",
    "label": "SCYX - Scynexis Inc Cmn"
  },
  {
    "value": "SCZ",
    "label": "SCZ - Ishares MSCI EAFE Sm"
  },
  {
    "value": "SEAC",
    "label": "SEAC - Sea Change Intl In"
  },
  {
    "value": "SEDG",
    "label": "SEDG - Solaredge Tech Cmn"
  },
  {
    "value": "SEED",
    "label": "SEED - Origin Agritech Limi"
  },
  {
    "value": "SEIC",
    "label": "SEIC - Sei Investments Co"
  },
  {
    "value": "SELB",
    "label": "SELB - Selecta Biosciences"
  },
  {
    "value": "SELF",
    "label": "SELF - Global Self Storage"
  },
  {
    "value": "SENEA",
    "label": "SENEA - Seneca Foods Cp A"
  },
  {
    "value": "SENEB",
    "label": "SENEB - Seneca Foods Cp B"
  },
  {
    "value": "SEV",
    "label": "SEV - Sevcon Inc"
  },
  {
    "value": "SFBC",
    "label": "SFBC - Sound Financial Cmn"
  },
  {
    "value": "SFBS",
    "label": "SFBS - Servisfirst Bancs Cmn"
  },
  {
    "value": "SFLY",
    "label": "SFLY - Shutterfly Inc"
  },
  {
    "value": "SFM",
    "label": "SFM - Sprouts Farmers Mark"
  },
  {
    "value": "SFNC",
    "label": "SFNC - Simmons First Natl"
  },
  {
    "value": "SFST",
    "label": "SFST - Southern First Bancs"
  },
  {
    "value": "SGBK",
    "label": "SGBK - Stonegate Bk Cmn Stk"
  },
  {
    "value": "SGC",
    "label": "SGC - Superior Uniform Grp"
  },
  {
    "value": "SGEN",
    "label": "SGEN - Seattle Genetics Inc"
  },
  {
    "value": "SGLB",
    "label": "SGLB - Sigma Labs Inc"
  },
  {
    "value": "SGLBW",
    "label": "SGLBW - Sigma Labs Inc. Warrant"
  },
  {
    "value": "SGMA",
    "label": "SGMA - Sigmatron Intl Inc"
  },
  {
    "value": "SGMO",
    "label": "SGMO - Sangamo Therapeutics"
  },
  {
    "value": "SGMS",
    "label": "SGMS - Scientific Games"
  },
  {
    "value": "SGOC",
    "label": "SGOC - Sgoco Group Ltd"
  },
  {
    "value": "SGQI",
    "label": "SGQI - Janus Detroit Street Trust Janus Sg Global Quali"
  },
  {
    "value": "SGRP",
    "label": "SGRP - Spar Group Inc"
  },
  {
    "value": "SGRY",
    "label": "SGRY - Surgery Partners CS"
  },
  {
    "value": "SGYP",
    "label": "SGYP - Synergy Pharma Cmn"
  },
  {
    "value": "SHBI",
    "label": "SHBI - Shore Bancshares Inc"
  },
  {
    "value": "SHEN",
    "label": "SHEN - Shenandoah Telecom"
  },
  {
    "value": "SHIP",
    "label": "SHIP - Seanergy Maritime Hl"
  },
  {
    "value": "SHIPW",
    "label": "SHIPW - Seanergy Maritime Holdings Corp Class A Warrants"
  },
  {
    "value": "SHLD",
    "label": "SHLD - Sears Hldgs Corp"
  },
  {
    "value": "SHLDW",
    "label": "SHLDW - Sears Holdings C Wt"
  },
  {
    "value": "SHLM",
    "label": "SHLM - Schulman A Inc"
  },
  {
    "value": "SHLO",
    "label": "SHLO - Shiloh Inds Inc"
  },
  {
    "value": "SHOO",
    "label": "SHOO - Steven Maddens Ltd"
  },
  {
    "value": "SHOR",
    "label": "SHOR - Shoretel Inc"
  },
  {
    "value": "SHOS",
    "label": "SHOS - Sears Hometown"
  },
  {
    "value": "SHPG",
    "label": "SHPG - Shire Plc Ads"
  },
  {
    "value": "SHSP",
    "label": "SHSP - Sharpspring Inc"
  },
  {
    "value": "SIEB",
    "label": "SIEB - Siebert Fin Cp"
  },
  {
    "value": "SIEN",
    "label": "SIEN - Sientra Inc Cmn"
  },
  {
    "value": "SIFI",
    "label": "SIFI - Si Financial Grp MD"
  },
  {
    "value": "SIFY",
    "label": "SIFY - Sify Techs Ltd Ads"
  },
  {
    "value": "SIGI",
    "label": "SIGI - Selective Ins Group"
  },
  {
    "value": "SIGM",
    "label": "SIGM - Sigma Designs Inc"
  },
  {
    "value": "SILC",
    "label": "SILC - Silicom Limited"
  },
  {
    "value": "SIMO",
    "label": "SIMO - Silicon Motion Techn"
  },
  {
    "value": "SINA",
    "label": "SINA - Sina Corporation"
  },
  {
    "value": "SINO",
    "label": "SINO - Sino-Global Shipping"
  },
  {
    "value": "SIR",
    "label": "SIR - Select Income REIT"
  },
  {
    "value": "SIRI",
    "label": "SIRI - Sirius XM Holdings I"
  },
  {
    "value": "SITO",
    "label": "SITO - Sito Mobile Cmn"
  },
  {
    "value": "SIVB",
    "label": "SIVB - Svb Financial Grp"
  },
  {
    "value": "SIVBO",
    "label": "SIVBO - Svb Capital II"
  },
  {
    "value": "SKIS",
    "label": "SKIS - Peak Resorts Cmn"
  },
  {
    "value": "SKLN",
    "label": "SKLN - Skyline Medical Cmn"
  },
  {
    "value": "SKOR",
    "label": "SKOR - Flxshrs Crscr US Cor"
  },
  {
    "value": "SKYS",
    "label": "SKYS - Sky Solar Hold Ads"
  },
  {
    "value": "SKYW",
    "label": "SKYW - Skywest Inc"
  },
  {
    "value": "SKYY",
    "label": "SKYY - First Trust ISE Clou"
  },
  {
    "value": "SLAB",
    "label": "SLAB - Silicon Labs Inc"
  },
  {
    "value": "SLCT",
    "label": "SLCT - Select Bancorp Inc"
  },
  {
    "value": "SLGN",
    "label": "SLGN - Silgan Holdings"
  },
  {
    "value": "SLIM",
    "label": "SLIM - The Obesity ETF"
  },
  {
    "value": "SLM",
    "label": "SLM - SLM Corporation"
  },
  {
    "value": "SLMAP",
    "label": "SLMAP - SLM Cp Srs A Pfd"
  },
  {
    "value": "SLMBP",
    "label": "SLMBP - SLM Cp Srs B Pfd"
  },
  {
    "value": "SLP",
    "label": "SLP - Simulations Plus Inc"
  },
  {
    "value": "SLQD",
    "label": "SLQD - Ishares 0-5 Ig Corp"
  },
  {
    "value": "SLRC",
    "label": "SLRC - Solar Capital Cmn"
  },
  {
    "value": "SLVO",
    "label": "SLVO - CS X-Links Silver Sh"
  },
  {
    "value": "SMBC",
    "label": "SMBC - Southern Mo Bancorp"
  },
  {
    "value": "SMBK",
    "label": "SMBK - Smartfinancial Cm ST"
  },
  {
    "value": "SMCI",
    "label": "SMCI - Super Micro Computer"
  },
  {
    "value": "SMCP",
    "label": "SMCP - Alphamark Actmg Smcp"
  },
  {
    "value": "SMED",
    "label": "SMED - Sharps Compliance"
  },
  {
    "value": "SMIT",
    "label": "SMIT - Schmitt Inds Inc"
  },
  {
    "value": "SMMF",
    "label": "SMMF - Summit Financial Gp"
  },
  {
    "value": "SMMT",
    "label": "SMMT - Summit Therapeu ADR"
  },
  {
    "value": "SMRT",
    "label": "SMRT - Stein Mart Inc"
  },
  {
    "value": "SMSI",
    "label": "SMSI - Smith Micro Software"
  },
  {
    "value": "SMTC",
    "label": "SMTC - Semtech Corp"
  },
  {
    "value": "SMTX",
    "label": "SMTX - Smtc Corp"
  },
  {
    "value": "SNAK",
    "label": "SNAK - Inventure Foods Inc"
  },
  {
    "value": "SNBC",
    "label": "SNBC - Sun Bancorp Inc"
  },
  {
    "value": "SNC",
    "label": "SNC - State Natl Co Cmn"
  },
  {
    "value": "SNCR",
    "label": "SNCR - Synchronoss Technolo"
  },
  {
    "value": "SND",
    "label": "SND - Smart Sand Inc"
  },
  {
    "value": "SNDE",
    "label": "SNDE - Sundance Energy Australia Ltd."
  },
  {
    "value": "SNDX",
    "label": "SNDX - Syndax Pharma Cmn"
  },
  {
    "value": "SNES",
    "label": "SNES - Senestech Inc"
  },
  {
    "value": "SNFCA",
    "label": "SNFCA - Security Natl Finl"
  },
  {
    "value": "SNGX",
    "label": "SNGX - Soligenix Inc"
  },
  {
    "value": "SNGXW",
    "label": "SNGXW - Soligenix Inc. Warrant"
  },
  {
    "value": "SNH",
    "label": "SNH - Senior Housing Properties Trust"
  },
  {
    "value": "SNHNI",
    "label": "SNHNI - Senior Housing Properties Trust"
  },
  {
    "value": "SNHNL",
    "label": "SNHNL - Senior Housing Properties Trust"
  },
  {
    "value": "SNHY",
    "label": "SNHY - Sun Hydraulics Cor"
  },
  {
    "value": "SNI",
    "label": "SNI - Scripps Ntwrks Int A"
  },
  {
    "value": "SNLN",
    "label": "SNLN - Pyxis/Iboxx Senior Loan ETF"
  },
  {
    "value": "SNMX",
    "label": "SNMX - Senomyx Inc"
  },
  {
    "value": "SNOA",
    "label": "SNOA - Sonoma Pharmaceuticals Inc"
  },
  {
    "value": "SNOAW",
    "label": "SNOAW - Sonoma Pharmaceuticals Inc"
  },
  {
    "value": "SNPS",
    "label": "SNPS - Synopsys Inc"
  },
  {
    "value": "SNSR",
    "label": "SNSR - Global X Internet of Things Thematic ETF"
  },
  {
    "value": "SNSS",
    "label": "SNSS - Sunesis Pharmaceutic"
  },
  {
    "value": "SOCL",
    "label": "SOCL - Glbl X Social Med ETF"
  },
  {
    "value": "SODA",
    "label": "SODA - Sodastream Int Ltd"
  },
  {
    "value": "SOFO",
    "label": "SOFO - Sonic Foundry Inc"
  },
  {
    "value": "SOHO",
    "label": "SOHO - Sotherly Hotels Cmn"
  },
  {
    "value": "SOHOB",
    "label": "SOHOB - Sotherly Hotels Inc. 8.0% Series B Cumulative Re"
  },
  {
    "value": "SOHOM",
    "label": "SOHOM - Sotherly Htl 7 Sr Nt"
  },
  {
    "value": "SOHU",
    "label": "SOHU - Sohu.Com Inc"
  },
  {
    "value": "SONA",
    "label": "SONA - Southern National Bk"
  },
  {
    "value": "SONC",
    "label": "SONC - Sonic Cp"
  },
  {
    "value": "SONS",
    "label": "SONS - Sonus Networks Inc"
  },
  {
    "value": "SORL",
    "label": "SORL - Sorl Auto Parts Inc"
  },
  {
    "value": "SOXX",
    "label": "SOXX - Ishares PHLX SC ETF"
  },
  {
    "value": "SP",
    "label": "SP - SP Plus Corporation"
  },
  {
    "value": "SPAN",
    "label": "SPAN - Span America Med S"
  },
  {
    "value": "SPAR",
    "label": "SPAR - Spartan Motors Inc"
  },
  {
    "value": "SPCB",
    "label": "SPCB - Supercom Ltd"
  },
  {
    "value": "SPEX",
    "label": "SPEX - Spherix Inc"
  },
  {
    "value": "SPHS",
    "label": "SPHS - Sophiris Bio Cmn"
  },
  {
    "value": "SPI",
    "label": "SPI - Spi Energy Co Ads"
  },
  {
    "value": "SPIL",
    "label": "SPIL - Siliconware Pr Ads"
  },
  {
    "value": "SPKE",
    "label": "SPKE - Spark Energy Cmn"
  },
  {
    "value": "SPKEP",
    "label": "SPKEP - Spark Energy Inc."
  },
  {
    "value": "SPLK",
    "label": "SPLK - Splunk Inc"
  },
  {
    "value": "SPLS",
    "label": "SPLS - Staples Inc"
  },
  {
    "value": "SPNC",
    "label": "SPNC - Spectranetics Cp T"
  },
  {
    "value": "SPNE",
    "label": "SPNE - Seaspine Holdings Cmn"
  },
  {
    "value": "SPNS",
    "label": "SPNS - Sapiens Intl Cp Nv"
  },
  {
    "value": "SPOK",
    "label": "SPOK - Spok Holdings Inc"
  },
  {
    "value": "SPPI",
    "label": "SPPI - Spectrum Pharma Inc"
  },
  {
    "value": "SPRT",
    "label": "SPRT - Support.Com Inc"
  },
  {
    "value": "SPSC",
    "label": "SPSC - Sps Commerce Inc"
  },
  {
    "value": "SPTN",
    "label": "SPTN - Spartannash Company"
  },
  {
    "value": "SPU",
    "label": "SPU - Skypeople Fruit Juic"
  },
  {
    "value": "SPWH",
    "label": "SPWH - Sportsman's Wareh Cmn"
  },
  {
    "value": "SPWR",
    "label": "SPWR - Sunpower Corporation"
  },
  {
    "value": "SQBG",
    "label": "SQBG - Sequential Brands Cmn"
  },
  {
    "value": "SQQQ",
    "label": "SQQQ - Ultrapro Short QQQ Proshares"
  },
  {
    "value": "SQZZ",
    "label": "SQZZ - Strategy Shares Active Alts Contrarian ETF"
  },
  {
    "value": "SRAX",
    "label": "SRAX - Social Reality Inc"
  },
  {
    "value": "SRCE",
    "label": "SRCE - 1St Source Corp"
  },
  {
    "value": "SRCL",
    "label": "SRCL - Stericycle Inc"
  },
  {
    "value": "SRCLP",
    "label": "SRCLP - Stericycle Inc Deps"
  },
  {
    "value": "SRDX",
    "label": "SRDX - Surmodics Inc"
  },
  {
    "value": "SRET",
    "label": "SRET - Global X Superdivide"
  },
  {
    "value": "SREV",
    "label": "SREV - Servicesrce Intl Inc"
  },
  {
    "value": "SRNE",
    "label": "SRNE - Sorrento Therpt Cmn"
  },
  {
    "value": "SRPT",
    "label": "SRPT - Sarepta Therapeutics"
  },
  {
    "value": "SRRA",
    "label": "SRRA - Sierra Oncology Inc"
  },
  {
    "value": "SRSC",
    "label": "SRSC - Sears Canada Inc"
  },
  {
    "value": "SRTS",
    "label": "SRTS - Sensus Healthcare Inc Cmn"
  },
  {
    "value": "SRTSW",
    "label": "SRTSW - Sensus Healthcare Inc Wt"
  },
  {
    "value": "SRUNU",
    "label": "SRUNU - Silver Run Acquisition Corporation II Units"
  },
  {
    "value": "SSB",
    "label": "SSB - South State Cp Cmn"
  },
  {
    "value": "SSBI",
    "label": "SSBI - Summit State Bank"
  },
  {
    "value": "SSFN",
    "label": "SSFN - Stewardship"
  },
  {
    "value": "SSH",
    "label": "SSH - Sunshine Heart Inc"
  },
  {
    "value": "SSKN",
    "label": "SSKN - Strata Skin Scien Cmn"
  },
  {
    "value": "SSNC",
    "label": "SSNC - SS&C Technologies"
  },
  {
    "value": "SSRI",
    "label": "SSRI - Silver Stand Res"
  },
  {
    "value": "SSYS",
    "label": "SSYS - Stratasys Ltd"
  },
  {
    "value": "STAA",
    "label": "STAA - Staar Surgical Co"
  },
  {
    "value": "STAF",
    "label": "STAF - Staffing 360"
  },
  {
    "value": "STB",
    "label": "STB - Student Trnspt Inc"
  },
  {
    "value": "STBA",
    "label": "STBA - S&T Bancorp Inc"
  },
  {
    "value": "STBZ",
    "label": "STBZ - State Bank Finl Corp"
  },
  {
    "value": "STDY",
    "label": "STDY - Steadymed Ltd Ord Sh"
  },
  {
    "value": "STFC",
    "label": "STFC - State Auto Finl Corp"
  },
  {
    "value": "STKL",
    "label": "STKL - Sunopta Inc"
  },
  {
    "value": "STKS",
    "label": "STKS - The One Group Cmn"
  },
  {
    "value": "STLD",
    "label": "STLD - Steel Dynamics Inc"
  },
  {
    "value": "STLR",
    "label": "STLR - Stellar Acquisition III Inc"
  },
  {
    "value": "STLRU",
    "label": "STLRU - Stellar Acquisition III Inc"
  },
  {
    "value": "STLRW",
    "label": "STLRW - Stellar Acquisition III Inc. Warrants"
  },
  {
    "value": "STLY",
    "label": "STLY - Stanley Furniture"
  },
  {
    "value": "STML",
    "label": "STML - Stemline Therapeutic"
  },
  {
    "value": "STMP",
    "label": "STMP - Stamps.Com Inc"
  },
  {
    "value": "STPP",
    "label": "STPP - Ipath Steepener"
  },
  {
    "value": "STRA",
    "label": "STRA - Strayer Education"
  },
  {
    "value": "STRL",
    "label": "STRL - Sterling Constructio"
  },
  {
    "value": "STRM",
    "label": "STRM - Streamline Health So"
  },
  {
    "value": "STRS",
    "label": "STRS - Stratus Pptys Inc"
  },
  {
    "value": "STRT",
    "label": "STRT - Strattec Security"
  },
  {
    "value": "STX",
    "label": "STX - Seagate Tech Ord Shs"
  },
  {
    "value": "SUMR",
    "label": "SUMR - Summer Infant Inc"
  },
  {
    "value": "SUNS",
    "label": "SUNS - Solar Senior Capital"
  },
  {
    "value": "SUNW",
    "label": "SUNW - Sunworks Inc Cmn"
  },
  {
    "value": "SUPN",
    "label": "SUPN - Supernus Pharm"
  },
  {
    "value": "SVA",
    "label": "SVA - Sinovac Biotech Ltd"
  },
  {
    "value": "SVBI",
    "label": "SVBI - Severn Bancorp Inc"
  },
  {
    "value": "SVVC",
    "label": "SVVC - Firsthand Technology"
  },
  {
    "value": "SWIN",
    "label": "SWIN - Alps ETF Trust Alps/Dorsey Wright Sector Momentu"
  },
  {
    "value": "SWIR",
    "label": "SWIR - Sierra Wireless In"
  },
  {
    "value": "SWKS",
    "label": "SWKS - Skyworks Solutions"
  },
  {
    "value": "SYBT",
    "label": "SYBT - Stock Yards Bancorp"
  },
  {
    "value": "SYKE",
    "label": "SYKE - Sykes Enterprises"
  },
  {
    "value": "SYMC",
    "label": "SYMC - Symantec Corporation"
  },
  {
    "value": "SYMX",
    "label": "SYMX - Synthesis Energy Sys"
  },
  {
    "value": "SYNA",
    "label": "SYNA - Synaptics Inc"
  },
  {
    "value": "SYNC",
    "label": "SYNC - Synacor Inc"
  },
  {
    "value": "SYNL",
    "label": "SYNL - Synalloy Cp"
  },
  {
    "value": "SYNT",
    "label": "SYNT - Syntel Inc"
  },
  {
    "value": "SYPR",
    "label": "SYPR - Sypris Solutions"
  },
  {
    "value": "SYRS",
    "label": "SYRS - Syros Pharmaceuticals"
  },
  {
    "value": "SYUT",
    "label": "SYUT - Synutra Internationa"
  },
  {
    "value": "TA",
    "label": "TA - Travelcenters of America Llc"
  },
  {
    "value": "TACO",
    "label": "TACO - Del Taco Rest Cmn"
  },
  {
    "value": "TACOW",
    "label": "TACOW - Del Taco Rest Wts"
  },
  {
    "value": "TACT",
    "label": "TACT - Transact Tech Inc"
  },
  {
    "value": "TAIT",
    "label": "TAIT - Taitron Components"
  },
  {
    "value": "TANH",
    "label": "TANH - Tantech Holdings Cmn"
  },
  {
    "value": "TANNI",
    "label": "TANNI - Travelcenters of America Llc"
  },
  {
    "value": "TANNL",
    "label": "TANNL - Travelcenters of America Llc"
  },
  {
    "value": "TANNZ",
    "label": "TANNZ - Travelcenters of America Llc"
  },
  {
    "value": "TAPR",
    "label": "TAPR - Barclays Plc ETN"
  },
  {
    "value": "TASR",
    "label": "TASR - Taser Intl Inc"
  },
  {
    "value": "TAST",
    "label": "TAST - Carrols Rstrnt Group"
  },
  {
    "value": "TATT",
    "label": "TATT - T A T Tech Ltd"
  },
  {
    "value": "TAX",
    "label": "TAX - Liberty Tax Cl A Cmn"
  },
  {
    "value": "TAYD",
    "label": "TAYD - Taylor Devices Inc"
  },
  {
    "value": "TBBK",
    "label": "TBBK - The Bancorp Inc"
  },
  {
    "value": "TBK",
    "label": "TBK - Triumph Bancorp Cmn"
  },
  {
    "value": "TBNK",
    "label": "TBNK - Territorial Bancorp"
  },
  {
    "value": "TBPH",
    "label": "TBPH - Theravance Bio Ord"
  },
  {
    "value": "TCBI",
    "label": "TCBI - Texas Capital Bncsh"
  },
  {
    "value": "TCBIL",
    "label": "TCBIL - Texas Cap 6.5 Sr NTS"
  },
  {
    "value": "TCBIP",
    "label": "TCBIP - Texas Capital"
  },
  {
    "value": "TCBK",
    "label": "TCBK - Trico Bancshares"
  },
  {
    "value": "TCCO",
    "label": "TCCO - Technical Commctn Cp"
  },
  {
    "value": "TCFC",
    "label": "TCFC - The Community Fin Cp"
  },
  {
    "value": "TCMD",
    "label": "TCMD - Tactile Systems Technology Inc Cmn"
  },
  {
    "value": "TCON",
    "label": "TCON - Tracon Pharma Cmn"
  },
  {
    "value": "TCPC",
    "label": "TCPC - TCP Capital Corp"
  },
  {
    "value": "TCRD",
    "label": "TCRD - THL Credit Inc"
  },
  {
    "value": "TCX",
    "label": "TCX - Tucows Inc Cl A Cmn"
  },
  {
    "value": "TDIV",
    "label": "TDIV - First Trs Vi Nasdaq"
  },
  {
    "value": "TEAM",
    "label": "TEAM - Atlassian Cls A Ord"
  },
  {
    "value": "TEAR",
    "label": "TEAR - Tearlab Corporation"
  },
  {
    "value": "TECD",
    "label": "TECD - Tech Data Cp"
  },
  {
    "value": "TECH",
    "label": "TECH - Bio-Techne Cp Cmn"
  },
  {
    "value": "TEDU",
    "label": "TEDU - Tarena Intl ADR"
  },
  {
    "value": "TELL",
    "label": "TELL - Tellurian Inc. New"
  },
  {
    "value": "TENX",
    "label": "TENX - Tenax Therapeutics"
  },
  {
    "value": "TERP",
    "label": "TERP - Terraform Pwr Cla Cmn"
  },
  {
    "value": "TESO",
    "label": "TESO - Tesco Corp"
  },
  {
    "value": "TESS",
    "label": "TESS - Tessco Tech Inc"
  },
  {
    "value": "TFSL",
    "label": "TFSL - Tfs Financial Corp"
  },
  {
    "value": "TGA",
    "label": "TGA - Transglobe Energy Cp"
  },
  {
    "value": "TGEN",
    "label": "TGEN - Tecogen Inc Cmn"
  },
  {
    "value": "TGLS",
    "label": "TGLS - Tecnoglass Inc"
  },
  {
    "value": "TGTX",
    "label": "TGTX - Tg Therapeuticscmn"
  },
  {
    "value": "THFF",
    "label": "THFF - First Finl Corp [In]"
  },
  {
    "value": "THLD",
    "label": "THLD - Threshold Pharmactl"
  },
  {
    "value": "THRM",
    "label": "THRM - Gentherm Inc Cmn"
  },
  {
    "value": "THST",
    "label": "THST - Truett Hurst Cl A Co"
  },
  {
    "value": "TICC",
    "label": "TICC - Ticc Capital Corp"
  },
  {
    "value": "TIG",
    "label": "TIG - Tigenix Nv"
  },
  {
    "value": "TIL",
    "label": "TIL - Till Cap Res Vt Shrs"
  },
  {
    "value": "TILE",
    "label": "TILE - Interface Inc Cmn"
  },
  {
    "value": "TINY",
    "label": "TINY - Harris & Harris"
  },
  {
    "value": "TIPT",
    "label": "TIPT - Tiptree Fncl Cl A Cmn"
  },
  {
    "value": "TISA",
    "label": "TISA - Top Image Systems"
  },
  {
    "value": "TITN",
    "label": "TITN - Titan Machinery Inc"
  },
  {
    "value": "TIVO",
    "label": "TIVO - Tivo Corp"
  },
  {
    "value": "TKAI",
    "label": "TKAI - Tokai Pharma Cmn"
  },
  {
    "value": "TLF",
    "label": "TLF - Tandy  Leather Fctry"
  },
  {
    "value": "TLGT",
    "label": "TLGT - Teligent Cmn Stk"
  },
  {
    "value": "TLND",
    "label": "TLND - Talend Sa"
  },
  {
    "value": "TLT",
    "label": "TLT - Ishares  20-Year Bond"
  },
  {
    "value": "TMUS",
    "label": "TMUS - T-Mobile US Cmn"
  },
  {
    "value": "TMUSP",
    "label": "TMUSP - T-Mobile 5.5 Pfd A"
  },
  {
    "value": "TNAV",
    "label": "TNAV - Telenav Inc"
  },
  {
    "value": "TNDM",
    "label": "TNDM - Tandem Diabetes Care"
  },
  {
    "value": "TNXP",
    "label": "TNXP - Tonix Pharm Hldg Cmn"
  },
  {
    "value": "TOPS",
    "label": "TOPS - Top Ships Inc"
  },
  {
    "value": "TORM",
    "label": "TORM - Tor Minerals Intl"
  },
  {
    "value": "TOUR",
    "label": "TOUR - Tuniu Corporatio Ads"
  },
  {
    "value": "TOWN",
    "label": "TOWN - Towne Bank"
  },
  {
    "value": "TPIC",
    "label": "TPIC - Tpi Composites Inc Cmn"
  },
  {
    "value": "TPIV",
    "label": "TPIV - Tapimmune Inc"
  },
  {
    "value": "TQQQ",
    "label": "TQQQ - Proshres Ultrpro QQQ"
  },
  {
    "value": "TRCB",
    "label": "TRCB - Two River Bncrp"
  },
  {
    "value": "TRCH",
    "label": "TRCH - Torchlight Energy"
  },
  {
    "value": "TREE",
    "label": "TREE - Lendingtree Inc"
  },
  {
    "value": "TRHC",
    "label": "TRHC - Tabula Rasa Healthcare Inc"
  },
  {
    "value": "TRIB",
    "label": "TRIB - Trinity Bio ADR"
  },
  {
    "value": "TRIL",
    "label": "TRIL - Trillium Therapeutic"
  },
  {
    "value": "TRIP",
    "label": "TRIP - Tripadvisor Inc"
  },
  {
    "value": "TRMB",
    "label": "TRMB - Trimble Navigation"
  },
  {
    "value": "TRMK",
    "label": "TRMK - Trustmark Corp"
  },
  {
    "value": "TRNC",
    "label": "TRNC - Tronc Inc"
  },
  {
    "value": "TRNS",
    "label": "TRNS - Transcat Inc"
  },
  {
    "value": "TROV",
    "label": "TROV - Trovagene Inc"
  },
  {
    "value": "TROVU",
    "label": "TROVU - Trovagene Inc. Unit"
  },
  {
    "value": "TROVW",
    "label": "TROVW - Trovagene In Warrant"
  },
  {
    "value": "TROW",
    "label": "TROW - T Rowe Price Group"
  },
  {
    "value": "TRPX",
    "label": "TRPX - Therapix Biosciences Ltd"
  },
  {
    "value": "TRS",
    "label": "TRS - Trimas Corporation"
  },
  {
    "value": "TRST",
    "label": "TRST - Trustco Bank Corp NY"
  },
  {
    "value": "TRUE",
    "label": "TRUE - Truecar Inc Cmn"
  },
  {
    "value": "TRUP",
    "label": "TRUP - Trupanion Inc"
  },
  {
    "value": "TRVG",
    "label": "TRVG - Trivago Nv"
  },
  {
    "value": "TRVN",
    "label": "TRVN - Trevena Inc"
  },
  {
    "value": "TSBK",
    "label": "TSBK - Timberland Bancorp"
  },
  {
    "value": "TSC",
    "label": "TSC - Tristate Capital Hld"
  },
  {
    "value": "TSCO",
    "label": "TSCO - Tractor Supply Co"
  },
  {
    "value": "TSEM",
    "label": "TSEM - Tower Semiconductor"
  },
  {
    "value": "TSLA",
    "label": "TSLA - Tesla Inc"
  },
  {
    "value": "TSRI",
    "label": "TSRI - T S R Inc"
  },
  {
    "value": "TSRO",
    "label": "TSRO - Tesaro Inc"
  },
  {
    "value": "TST",
    "label": "TST - Thestreet Inc"
  },
  {
    "value": "TTD",
    "label": "TTD - Trade Desk Inc"
  },
  {
    "value": "TTEC",
    "label": "TTEC - Teletech Hldgs"
  },
  {
    "value": "TTEK",
    "label": "TTEK - Tetra Tech Inc"
  },
  {
    "value": "TTGT",
    "label": "TTGT - Techtarget Inc"
  },
  {
    "value": "TTMI",
    "label": "TTMI - TTM Technologies I"
  },
  {
    "value": "TTNP",
    "label": "TTNP - Titan Pharma Cmn"
  },
  {
    "value": "TTOO",
    "label": "TTOO - T2 Biosystems CS"
  },
  {
    "value": "TTPH",
    "label": "TTPH - Tetraphase Pharmaceu"
  },
  {
    "value": "TTS",
    "label": "TTS - Tile Shop Hldgs Cmn"
  },
  {
    "value": "TTWO",
    "label": "TTWO - Take-Two Interacti"
  },
  {
    "value": "TUES",
    "label": "TUES - Tuesday Morning Co"
  },
  {
    "value": "TURN",
    "label": "TURN - 180 Degree Capital Corp."
  },
  {
    "value": "TUSA",
    "label": "TUSA - First TR Alpdex ETF"
  },
  {
    "value": "TUSK",
    "label": "TUSK - Mammoth Energy Services Inc"
  },
  {
    "value": "TUTI",
    "label": "TUTI - Tuttle Tct Mg Mlt"
  },
  {
    "value": "TUTT",
    "label": "TUTT - Tuttle Tct MGT US Cr"
  },
  {
    "value": "TVIA",
    "label": "TVIA - Terravia Hldgs Inc"
  },
  {
    "value": "TVIX",
    "label": "TVIX - VS 2X VIX Short Term"
  },
  {
    "value": "TVIZ",
    "label": "TVIZ - VS 2X VIX Mid Term"
  },
  {
    "value": "TVTY",
    "label": "TVTY - Tivity Health"
  },
  {
    "value": "TWIN",
    "label": "TWIN - Twin Disc Inc"
  },
  {
    "value": "TWMC",
    "label": "TWMC - Trans World Entert"
  },
  {
    "value": "TWNK",
    "label": "TWNK - Hostess Brands Inc"
  },
  {
    "value": "TWNKW",
    "label": "TWNKW - Gores Holdings Warr"
  },
  {
    "value": "TWOU",
    "label": "TWOU - 2U Inc Cmn Stk"
  },
  {
    "value": "TXN",
    "label": "TXN - Texas Instruments"
  },
  {
    "value": "TXRH",
    "label": "TXRH - Texas Roadhouse Inc"
  },
  {
    "value": "TYHT",
    "label": "TYHT - Shineco Inc"
  },
  {
    "value": "TYPE",
    "label": "TYPE - Monotype Imag. Hold."
  },
  {
    "value": "TZOO",
    "label": "TZOO - Travelzoo Inc"
  },
  {
    "value": "UAE",
    "label": "UAE - Ishares MSCI UAE Cap"
  },
  {
    "value": "UBCP",
    "label": "UBCP - United Bncp Inc"
  },
  {
    "value": "UBFO",
    "label": "UBFO - United Security Bcsh"
  },
  {
    "value": "UBIO",
    "label": "UBIO - Proshr Ult Nq Bio"
  },
  {
    "value": "UBND",
    "label": "UBND - Wisdmtree W Un Bnd"
  },
  {
    "value": "UBNK",
    "label": "UBNK - United Fin Bncp New"
  },
  {
    "value": "UBNT",
    "label": "UBNT - Ubiquiti Networks I"
  },
  {
    "value": "UBOH",
    "label": "UBOH - United Bancshares"
  },
  {
    "value": "UBSH",
    "label": "UBSH - Union Bankshares Cp"
  },
  {
    "value": "UBSI",
    "label": "UBSI - United Bkshs Inc"
  },
  {
    "value": "UCBA",
    "label": "UCBA - United Community Ban"
  },
  {
    "value": "UCBI",
    "label": "UCBI - United Comm Banks"
  },
  {
    "value": "UCFC",
    "label": "UCFC - United Community Fnl"
  },
  {
    "value": "UCTT",
    "label": "UCTT - Ultra Clean Holdings"
  },
  {
    "value": "UDBI",
    "label": "UDBI - Legg Mason US Div Cr"
  },
  {
    "value": "UEIC",
    "label": "UEIC - Universal Elect In"
  },
  {
    "value": "UEPS",
    "label": "UEPS - Net 1 Ueps Techs Inc"
  },
  {
    "value": "UFCS",
    "label": "UFCS - United Fire Group I"
  },
  {
    "value": "UFPI",
    "label": "UFPI - Universal Forest Prd"
  },
  {
    "value": "UFPT",
    "label": "UFPT - U F P Tech Inc"
  },
  {
    "value": "UG",
    "label": "UG - United Guardian Inc"
  },
  {
    "value": "UGLD",
    "label": "UGLD - VS 3X Gold"
  },
  {
    "value": "UHAL",
    "label": "UHAL - A M E R C  O"
  },
  {
    "value": "UIHC",
    "label": "UIHC - United Insurance Hld"
  },
  {
    "value": "ULBI",
    "label": "ULBI - Ultralife Corp"
  },
  {
    "value": "ULH",
    "label": "ULH - Universal Logis Hldg"
  },
  {
    "value": "ULTA",
    "label": "ULTA - Ulta Salon Cosmetic"
  },
  {
    "value": "ULTI",
    "label": "ULTI - Ultimate Software"
  },
  {
    "value": "UMBF",
    "label": "UMBF - Ump Financial Corp"
  },
  {
    "value": "UMPQ",
    "label": "UMPQ - Umpqua Holdings Corp"
  },
  {
    "value": "UNAM",
    "label": "UNAM - Unico American Cp"
  },
  {
    "value": "UNB",
    "label": "UNB - Union Bankshares Inc"
  },
  {
    "value": "UNFI",
    "label": "UNFI - United Nat Foods I"
  },
  {
    "value": "UNIS",
    "label": "UNIS - Unilife Corporation"
  },
  {
    "value": "UNIT",
    "label": "UNIT - Uniti Group Inc"
  },
  {
    "value": "UNTY",
    "label": "UNTY - Unity Bancorp Inc"
  },
  {
    "value": "UNXL",
    "label": "UNXL - Uni-Pixel Inc"
  },
  {
    "value": "UPLD",
    "label": "UPLD - Upland Software Inc"
  },
  {
    "value": "URBN",
    "label": "URBN - Urban Outfitters Inc"
  },
  {
    "value": "URRE",
    "label": "URRE - Uranium Resources"
  },
  {
    "value": "USAK",
    "label": "USAK - U S A Truck Inc"
  },
  {
    "value": "USAP",
    "label": "USAP - Universal Stainles"
  },
  {
    "value": "USAT",
    "label": "USAT - USA Technologies Inc"
  },
  {
    "value": "USATP",
    "label": "USATP - USA Technologies Pfd"
  },
  {
    "value": "USCR",
    "label": "USCR - U S Concrete Inc"
  },
  {
    "value": "USEG",
    "label": "USEG - U S Energy Corp"
  },
  {
    "value": "USLB",
    "label": "USLB - PS Russell 1000 Low Beta Equal Weight"
  },
  {
    "value": "USLM",
    "label": "USLM - U S Lime & Mineral"
  },
  {
    "value": "USLV",
    "label": "USLV - VS 3X Silver"
  },
  {
    "value": "UTEK",
    "label": "UTEK - Ultratech Inc"
  },
  {
    "value": "UTHR",
    "label": "UTHR - United Therapeutic"
  },
  {
    "value": "UTMD",
    "label": "UTMD - Utah Medical Prod"
  },
  {
    "value": "UTSI",
    "label": "UTSI - Utstarcom Holdings C"
  },
  {
    "value": "UVSP",
    "label": "UVSP - Univest Corp of Penn"
  },
  {
    "value": "VALU",
    "label": "VALU - Value Line Inc"
  },
  {
    "value": "VALX",
    "label": "VALX - Validea Market Legen"
  },
  {
    "value": "VBFC",
    "label": "VBFC - Village Bank & Trust"
  },
  {
    "value": "VBIV",
    "label": "VBIV - Vbi Vaccines Inc CS"
  },
  {
    "value": "VBLT",
    "label": "VBLT - Vascular Biogen. Ord"
  },
  {
    "value": "VBND",
    "label": "VBND - ETF Sr Slt Vd Cr Bd"
  },
  {
    "value": "VBTX",
    "label": "VBTX - Veritex Holdings Cmn"
  },
  {
    "value": "VCEL",
    "label": "VCEL - Vericel Corproation"
  },
  {
    "value": "VCIT",
    "label": "VCIT - Vanguard Interm Corp"
  },
  {
    "value": "VCLT",
    "label": "VCLT - Vanguard Lng Tm Corp"
  },
  {
    "value": "VCSH",
    "label": "VCSH - Vanguard Sht Tm Cor"
  },
  {
    "value": "VCYT",
    "label": "VCYT - Veracyte Inc"
  },
  {
    "value": "VDSI",
    "label": "VDSI - Vasco Data Security"
  },
  {
    "value": "VDTH",
    "label": "VDTH - Videocon D2H Ltd Ads"
  },
  {
    "value": "VECO",
    "label": "VECO - Veeco Instrument"
  },
  {
    "value": "VEON",
    "label": "VEON - Veon Ltd"
  },
  {
    "value": "VGIT",
    "label": "VGIT - Vanguard Int Gov"
  },
  {
    "value": "VGLT",
    "label": "VGLT - Vanguard Long Gov"
  },
  {
    "value": "VGSH",
    "label": "VGSH - Vanguard Sh Term Gov"
  },
  {
    "value": "VIA",
    "label": "VIA - Viacom Inc Cl A"
  },
  {
    "value": "VIAB",
    "label": "VIAB - Viacom Inc Cl B"
  },
  {
    "value": "VIAV",
    "label": "VIAV - Viavi Solutions Cmn"
  },
  {
    "value": "VICL",
    "label": "VICL - Vical Incorporated"
  },
  {
    "value": "VICR",
    "label": "VICR - Vicor Cp"
  },
  {
    "value": "VIDI",
    "label": "VIDI - Vident Intl Eqty Fnd"
  },
  {
    "value": "VIGI",
    "label": "VIGI - Van Int Div App ETF"
  },
  {
    "value": "VIIX",
    "label": "VIIX - VS VIX Short Term"
  },
  {
    "value": "VIIZ",
    "label": "VIIZ - VS VIX Mid Term"
  },
  {
    "value": "VIP",
    "label": "VIP - Vimpelcom Ltd Ads"
  },
  {
    "value": "VIRC",
    "label": "VIRC - Virco MFG Cp"
  },
  {
    "value": "VIRT",
    "label": "VIRT - Virtu Financial Cm A"
  },
  {
    "value": "VIVE",
    "label": "VIVE - Viveve Medical"
  },
  {
    "value": "VIVO",
    "label": "VIVO - Meridian Bioscience"
  },
  {
    "value": "VKTX",
    "label": "VKTX - Viking Thera Cmn"
  },
  {
    "value": "VKTXW",
    "label": "VKTXW - Viking Theraptcs Wts"
  },
  {
    "value": "VLGEA",
    "label": "VLGEA - Village Super Mkt"
  },
  {
    "value": "VLRX",
    "label": "VLRX - Valeritas Holdings Inc"
  },
  {
    "value": "VMBS",
    "label": "VMBS - Vanguard Mortg Bckd"
  },
  {
    "value": "VNDA",
    "label": "VNDA - Vanda Pharmaceutical"
  },
  {
    "value": "VNET",
    "label": "VNET - 21Vianet Group Inc"
  },
  {
    "value": "VNOM",
    "label": "VNOM - Viper Energy LP Cmn"
  },
  {
    "value": "VNQI",
    "label": "VNQI - Vanguard Glb Exus Re"
  },
  {
    "value": "VOD",
    "label": "VOD - Vodafone Grp Plc Ads"
  },
  {
    "value": "VONE",
    "label": "VONE - Vanguard Russell1000"
  },
  {
    "value": "VONG",
    "label": "VONG - Vangrd Russl 1000 Gr"
  },
  {
    "value": "VONV",
    "label": "VONV - Vangrd Russl 1000Val"
  },
  {
    "value": "VOXX",
    "label": "VOXX - Voxx Intl Corp"
  },
  {
    "value": "VRA",
    "label": "VRA - Vera Bradley"
  },
  {
    "value": "VRAY",
    "label": "VRAY - Viewray Inc Cm ST"
  },
  {
    "value": "VREX",
    "label": "VREX - Varex Imaging Corp"
  },
  {
    "value": "VRIG",
    "label": "VRIG - Powershares Variable Rate Investment Grade Port"
  },
  {
    "value": "VRML",
    "label": "VRML - Vermillion Inc"
  },
  {
    "value": "VRNS",
    "label": "VRNS - Varonis Systems Inc"
  },
  {
    "value": "VRNT",
    "label": "VRNT - Verint Systems Inc"
  },
  {
    "value": "VRSK",
    "label": "VRSK - Verisk Analytics Inc"
  },
  {
    "value": "VRSN",
    "label": "VRSN - Verisign Inc"
  },
  {
    "value": "VRTB",
    "label": "VRTB - Vestin Realty Mtge"
  },
  {
    "value": "VRTS",
    "label": "VRTS - Virtus Inv Prts"
  },
  {
    "value": "VRTSP",
    "label": "VRTSP - Virtus Investment Partners Inc Mandatory Pfd Con"
  },
  {
    "value": "VRTU",
    "label": "VRTU - Virtusa Corporation"
  },
  {
    "value": "VRTX",
    "label": "VRTX - Vertex Pharmaceutic"
  },
  {
    "value": "VSAR",
    "label": "VSAR - Versartis Inc Cmn"
  },
  {
    "value": "VSAT",
    "label": "VSAT - Viasat Inc"
  },
  {
    "value": "VSEC",
    "label": "VSEC - V S E Cp"
  },
  {
    "value": "VSTM",
    "label": "VSTM - Verastem Inc"
  },
  {
    "value": "VTGN",
    "label": "VTGN - Vistagen Therap. Com"
  },
  {
    "value": "VTHR",
    "label": "VTHR - Vanguard Russell3000"
  },
  {
    "value": "VTIP",
    "label": "VTIP - Vanguard Shtm Infpro"
  },
  {
    "value": "VTL",
    "label": "VTL - Vital Therapies Inc"
  },
  {
    "value": "VTNR",
    "label": "VTNR - Vertex Energy Cmn"
  },
  {
    "value": "VTVT",
    "label": "VTVT - Vtv Theraptcs Cl A"
  },
  {
    "value": "VTWG",
    "label": "VTWG - Vangrd Rusll 2000 Gr"
  },
  {
    "value": "VTWO",
    "label": "VTWO - Vanguard Russell2000"
  },
  {
    "value": "VTWV",
    "label": "VTWV - Vangrd Rusll 2000 Va"
  },
  {
    "value": "VUSE",
    "label": "VUSE - Vident Core US Eqty"
  },
  {
    "value": "VUZI",
    "label": "VUZI - Vuzix Corp Cmn Stk"
  },
  {
    "value": "VVPR",
    "label": "VVPR - Vivopower International Plc Ordinary Shares"
  },
  {
    "value": "VVUS",
    "label": "VVUS - Vivus Inc"
  },
  {
    "value": "VWOB",
    "label": "VWOB - Vanguard EM Gov Bnd"
  },
  {
    "value": "VWR",
    "label": "VWR - Vwr Corporation Cmn"
  },
  {
    "value": "VXUS",
    "label": "VXUS - Vngrd Tl Intl ST ETF"
  },
  {
    "value": "VYGR",
    "label": "VYGR - Voyager Therapeut Cmn"
  },
  {
    "value": "VYMI",
    "label": "VYMI - Van Int Hi Div Yld"
  },
  {
    "value": "WABC",
    "label": "WABC - Westamerica Bancorp"
  },
  {
    "value": "WAFD",
    "label": "WAFD - Washington Federal"
  },
  {
    "value": "WASH",
    "label": "WASH - Washington TR Bncorp"
  },
  {
    "value": "WATT",
    "label": "WATT - Energous Corp Cmn"
  },
  {
    "value": "WAYN",
    "label": "WAYN - Wayne Savings Bcsh"
  },
  {
    "value": "WB",
    "label": "WB - Weibo Corp. Ads"
  },
  {
    "value": "WBA",
    "label": "WBA - Walgreens Boots Alliance"
  },
  {
    "value": "WBB",
    "label": "WBB - Westbury Bancorp"
  },
  {
    "value": "WBKC",
    "label": "WBKC - Wolverine Bancorp"
  },
  {
    "value": "WBMD",
    "label": "WBMD - Webmd Health Corp"
  },
  {
    "value": "WCFB",
    "label": "WCFB - Webster City Fed Bcp"
  },
  {
    "value": "WCST",
    "label": "WCST - Wecast Network Inc"
  },
  {
    "value": "WDC",
    "label": "WDC - Western Digital Cp"
  },
  {
    "value": "WDFC",
    "label": "WDFC - W D 40 Co"
  },
  {
    "value": "WEB",
    "label": "WEB - Web.Com Group Inc"
  },
  {
    "value": "WEBK",
    "label": "WEBK - Wellesley Bncp Inc"
  },
  {
    "value": "WEN",
    "label": "WEN - Wendys Company"
  },
  {
    "value": "WERN",
    "label": "WERN - Werner Enterprise"
  },
  {
    "value": "WETF",
    "label": "WETF - Wisdomtree Invstmnts"
  },
  {
    "value": "WEYS",
    "label": "WEYS - Weyco Gp Inc"
  },
  {
    "value": "WFBI",
    "label": "WFBI - Washingtonfirst Bk"
  },
  {
    "value": "WFM",
    "label": "WFM - Whole Foods Market"
  },
  {
    "value": "WHF",
    "label": "WHF - Whitehorse Finance"
  },
  {
    "value": "WHFBL",
    "label": "WHFBL - Whitehorse Fin Sr Nt"
  },
  {
    "value": "WHLM",
    "label": "WHLM - Wilhelmina Intl Cmn"
  },
  {
    "value": "WHLR",
    "label": "WHLR - Wheeler Real Estate"
  },
  {
    "value": "WHLRD",
    "label": "WHLRD - Wheeler Real Estate Investment Trust Inc"
  },
  {
    "value": "WHLRP",
    "label": "WHLRP - Wheeler REIT B Pfd"
  },
  {
    "value": "WHLRW",
    "label": "WHLRW - Wheeler REIT Wts"
  },
  {
    "value": "WIFI",
    "label": "WIFI - Boingo Wireless Inc"
  },
  {
    "value": "WILC",
    "label": "WILC - G Willi-Food Intl"
  },
  {
    "value": "WILN",
    "label": "WILN - Wi-Lan Inc Cmn Stk"
  },
  {
    "value": "WIN",
    "label": "WIN - Windstream Hldgs Inc"
  },
  {
    "value": "WINA",
    "label": "WINA - Winmark Corp"
  },
  {
    "value": "WING",
    "label": "WING - Wingstop Inc Cmn"
  },
  {
    "value": "WINS",
    "label": "WINS - Wins Fin Hldgs Ord"
  },
  {
    "value": "WINT",
    "label": "WINT - Windtree Therapeutic"
  },
  {
    "value": "WIRE",
    "label": "WIRE - Encore Wire Cp"
  },
  {
    "value": "WIX",
    "label": "WIX - Wix.Com Ltd"
  },
  {
    "value": "WKHS",
    "label": "WKHS - Workhorse Grp Cmn ST"
  },
  {
    "value": "WLB",
    "label": "WLB - Westmoreland Coal"
  },
  {
    "value": "WLDN",
    "label": "WLDN - Willdan Group Inc"
  },
  {
    "value": "WLFC",
    "label": "WLFC - Willis Lease Fin C"
  },
  {
    "value": "WLTW",
    "label": "WLTW - Willis Towers Wts Cmn"
  },
  {
    "value": "WMAR",
    "label": "WMAR - West Marine Inc"
  },
  {
    "value": "WMGI",
    "label": "WMGI - Wright Med Grp Nv"
  },
  {
    "value": "WMGIZ",
    "label": "WMGIZ - Wright Medic. N.V Cv"
  },
  {
    "value": "WMIH",
    "label": "WMIH - Wmih Corp. Cmn"
  },
  {
    "value": "WNEB",
    "label": "WNEB - Western New England Bancorp Inc"
  },
  {
    "value": "WOOD",
    "label": "WOOD - Ishres Gbl Tbr Forst"
  },
  {
    "value": "WOOF",
    "label": "WOOF - Vca Inc"
  },
  {
    "value": "WPCS",
    "label": "WPCS - Wpcs Intl Inc"
  },
  {
    "value": "WPPGY",
    "label": "WPPGY - Wpp Plc ADR"
  },
  {
    "value": "WPRT",
    "label": "WPRT - Westport Fuel Systems Inc"
  },
  {
    "value": "WRLD",
    "label": "WRLD - World Acceptance Cp"
  },
  {
    "value": "WSBC",
    "label": "WSBC - Wesbanco Inc"
  },
  {
    "value": "WSBF",
    "label": "WSBF - Waterstone Financial"
  },
  {
    "value": "WSCI",
    "label": "WSCI - Wsi Industries Inc"
  },
  {
    "value": "WSFS",
    "label": "WSFS - WSFS Financial Corp"
  },
  {
    "value": "WSFSL",
    "label": "WSFSL - WSFS Fnl 6.25 Sr Nt"
  },
  {
    "value": "WSTC",
    "label": "WSTC - West Corporation"
  },
  {
    "value": "WSTG",
    "label": "WSTG - Wayside Technology"
  },
  {
    "value": "WSTL",
    "label": "WSTL - Westell Technologies"
  },
  {
    "value": "WTBA",
    "label": "WTBA - West Bancorporation"
  },
  {
    "value": "WTFC",
    "label": "WTFC - Wintrust Finl Corp"
  },
  {
    "value": "WTFCM",
    "label": "WTFCM - Wintrust Fin Pref D"
  },
  {
    "value": "WTFCW",
    "label": "WTFCW - Wintrust Tarp Wrnts"
  },
  {
    "value": "WVE",
    "label": "WVE - Wave Life Sci Ord Sh"
  },
  {
    "value": "WVFC",
    "label": "WVFC - Wvs Financial Corp"
  },
  {
    "value": "WVVI",
    "label": "WVVI - Willamette Valley"
  },
  {
    "value": "WVVIP",
    "label": "WVVIP - Willamette Valley Vineyards In"
  },
  {
    "value": "WWD",
    "label": "WWD - Woodward Inc"
  },
  {
    "value": "WYIG",
    "label": "WYIG - Jm Global Holding Cmn"
  },
  {
    "value": "WYIGU",
    "label": "WYIGU - Jm Global Hold Unit"
  },
  {
    "value": "WYIGW",
    "label": "WYIGW - Jm Global Holdin Wt"
  },
  {
    "value": "WYNN",
    "label": "WYNN - Wynn Resorts Limited"
  },
  {
    "value": "XBIO",
    "label": "XBIO - Xenetic Biosciences Inc"
  },
  {
    "value": "XBIT",
    "label": "XBIT - Xbiotech Inc Cmn"
  },
  {
    "value": "XBKS",
    "label": "XBKS - Xenith Bankshares Inc New"
  },
  {
    "value": "XCRA",
    "label": "XCRA - Xcerra Corp Cmn Stk"
  },
  {
    "value": "XELB",
    "label": "XELB - XCEL Brands Cmn"
  },
  {
    "value": "XENE",
    "label": "XENE - Xenon Pharmace Cm Sh"
  },
  {
    "value": "XENT",
    "label": "XENT - Intersect Ent Cmn"
  },
  {
    "value": "XGTI",
    "label": "XGTI - XG Technology Icmn"
  },
  {
    "value": "XGTIW",
    "label": "XGTIW - XG Technology Inc"
  },
  {
    "value": "XIV",
    "label": "XIV - VS Inverse VIX Short Term"
  },
  {
    "value": "XLNX",
    "label": "XLNX - Xilinx Inc"
  },
  {
    "value": "XLRN",
    "label": "XLRN - Acceleron Pharma Cmn"
  },
  {
    "value": "XNCR",
    "label": "XNCR - Xencor Inc"
  },
  {
    "value": "XNET",
    "label": "XNET - Xunlei Limited ADR"
  },
  {
    "value": "XOG",
    "label": "XOG - Extraction Oil & Gas Inc"
  },
  {
    "value": "XOMA",
    "label": "XOMA - Xoma Corporation"
  },
  {
    "value": "XONE",
    "label": "XONE - The Exone Company"
  },
  {
    "value": "XPER",
    "label": "XPER - Xperi Corporation"
  },
  {
    "value": "XPLR",
    "label": "XPLR - Xplore Tech Corp De"
  },
  {
    "value": "XRAY",
    "label": "XRAY - Dentsply Sirona Inc"
  },
  {
    "value": "XRDC",
    "label": "XRDC - Crossroads Cap Inc"
  },
  {
    "value": "XTLB",
    "label": "XTLB - Xtl Biopharma Ads"
  },
  {
    "value": "XXIA",
    "label": "XXIA - IXIA"
  },
  {
    "value": "YDIV",
    "label": "YDIV - First Trust ETF Vi"
  },
  {
    "value": "YECO",
    "label": "YECO - Yulong Eco-Mtls Ord"
  },
  {
    "value": "YHOO",
    "label": "YHOO - Yahoo! Inc"
  },
  {
    "value": "YIN",
    "label": "YIN - Yintech Investm Ads"
  },
  {
    "value": "YLCO",
    "label": "YLCO - Global X Yieldco ETF"
  },
  {
    "value": "YNDX",
    "label": "YNDX - Yandex N.V."
  },
  {
    "value": "YORW",
    "label": "YORW - York Water Co"
  },
  {
    "value": "YRCW",
    "label": "YRCW - YRC Worldwide"
  },
  {
    "value": "YTEN",
    "label": "YTEN - Yield10 Bioscience Inc"
  },
  {
    "value": "YTRA",
    "label": "YTRA - Yatra Online Inc. Ordinary Shares"
  },
  {
    "value": "YY",
    "label": "YY - YY Inc"
  },
  {
    "value": "Z",
    "label": "Z - Zillow Group Cl C"
  },
  {
    "value": "ZAGG",
    "label": "ZAGG - Zagg Inc"
  },
  {
    "value": "ZAIS",
    "label": "ZAIS - Zais Group Hld A Cmn"
  },
  {
    "value": "ZBIO",
    "label": "ZBIO - Proshr Ul ST Nq Bio"
  },
  {
    "value": "ZBRA",
    "label": "ZBRA - Zebra Technologies"
  },
  {
    "value": "ZEUS",
    "label": "ZEUS - Olympic Steel Inc"
  },
  {
    "value": "ZFGN",
    "label": "ZFGN - Zafgen Inc Cmn"
  },
  {
    "value": "ZG",
    "label": "ZG - Zillow Grp Inc Cl A"
  },
  {
    "value": "ZGNX",
    "label": "ZGNX - Zogenix Inc"
  },
  {
    "value": "ZION",
    "label": "ZION - Zions Bancorporation"
  },
  {
    "value": "ZIONW",
    "label": "ZIONW - Zions Bncrp Wts"
  },
  {
    "value": "ZIOP",
    "label": "ZIOP - Ziopharm Oncology In"
  },
  {
    "value": "ZIV",
    "label": "ZIV - VS Inverse VIX Mterm"
  },
  {
    "value": "ZIXI",
    "label": "ZIXI - Zix Corp"
  },
  {
    "value": "ZLTQ",
    "label": "ZLTQ - Zeltiq Aesthetics"
  },
  {
    "value": "ZN",
    "label": "ZN - Zion Oil & Gas Inc"
  },
  {
    "value": "ZNGA",
    "label": "ZNGA - Zynga Inc Cl A Cmn"
  },
  {
    "value": "ZSAN",
    "label": "ZSAN - Zosano Pharma Cmn"
  },
  {
    "value": "ZUMZ",
    "label": "ZUMZ - Zumiez Inc"
  },
  {
    "value": "ZYNE",
    "label": "ZYNE - Zynerba Pharma CS"
  }
];

  class SelectOption extends React.Component {
    state = {
      value: null,
      placeholder: 'Search / Select NASDAQ Stocks...'
    }
    handleChange = (value) => {
      this.setState({ value });
      console.log(`Option selected:`, value);
    }
    render() {
      const { value } = this.state;
      
      return (
        <Select
          value={value}
          onChange={this.handleChange}
          options={options}
          placeholder={this.state.placeholder}

        />
      );
    }
  }
  
  export default SelectOption;