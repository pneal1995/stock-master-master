import React from 'react';
import Select from 'react-select';
import './SearchBar.css';


const options = [
    {
      "value": "1ST",
      "label": "1ST - FirstBlood"
    },
    {
      "value": "2GIVE",
      "label": "2GIVE - GiveCoin"
    },
    {
      "value": '808',
      "label": "808 - 808Coin"
    },
    {
      "value": "ABT",
      "label": "ABT - ArcBlock"
    },
    {
      "value": "ABY",
      "label": "ABY - ArtByte"
    },
    {
      "value": "AC",
      "label": "AC - AsiaCoin"
    },
    {
      "value": "ACT",
      "label": "ACT - Achain"
    },
    {
      "value": "ADA",
      "label": "ADA - Cardano"
    },
    {
      "value": "ADT",
      "label": "ADT - adToken"
    },
    {
      "value": "ADX",
      "label": "ADX - AdEx"
    },
    {
      "value": "AE",
      "label": "AE - Aeternity"
    },
    {
      "value": "AEON",
      "label": "AEON - Aeon"
    },
    {
      "value": "AGI",
      "label": "AGI - SingularityNET"
    },
    {
      "value": "AGRS",
      "label": "AGRS - IDNI-Agoras"
    },
    {
      "value": "AI",
      "label": "AI - POLY-AI"
    },
    {
      "value": "AID",
      "label": "AID - AidCoin"
    },
    {
      "value": "AION",
      "label": "AION - Aion"
    },
    {
      "value": "AIR",
      "label": "AIR - AirToken"
    },
    {
      "value": "AKY",
      "label": "AKY - Akuya-Coin"
    },
    {
      "value": "ALIS",
      "label": "ALIS - ALIS"
    },
    {
      "value": "AMBER",
      "label": "AMBER - AmberCoin"
    },
    {
      "value": "AMP",
      "label": "AMP - Synereo"
    },
    {
      "value": "ANC",
      "label": "ANC - Anoncoin"
    },
    {
      "value": "ANT",
      "label": "ANT - Aragon"
    },
    {
      "value": "APPC",
      "label": "APPC - AppCoins"
    },
    {
      "value": "APX",
      "label": "APX - Ventures"
    },
    {
      "value": "ARDR",
      "label": "ARDR - Ardor"
    },
    {
      "value": "ARK",
      "label": "ARK - Ark"
    },
    {
      "value": "ARN",
      "label": "ARN - Aeron"
    },
    {
      "value": "AST",
      "label": "AST - AirSwap"
    },
    {
      "value": "ATB",
      "label": "ATB - ATBCoin"
    },
    {
      "value": "ATM",
      "label": "ATM - ATMChain"
    },
    {
      "value": "ATS",
      "label": "ATS - Authorship"
    },
    {
      "value": "AUR",
      "label": "AUR - Auroracoin"
    },
    {
      "value": "AVT",
      "label": "AVT - Aventus"
    },
    {
      "value": "B3",
      "label": "B3 - B3Coin"
    },
    {
      "value": "BAT",
      "label": "BAT - Basic-Attention-Token"
    },
    {
      "value": "BAY",
      "label": "BAY - BitBay"
    },
    {
      "value": "BBR",
      "label": "BBR - Boolberry"
    },
    {
      "value": "BCAP",
      "label": "BCAP - BCAP"
    },
    {
      "value": "BCC",
      "label": "BCC - BitConnect"
    },
    {
      "value": "BCD",
      "label": "BCD - Bitcoin-Diamond"
    },
    {
      "value": "BCH",
      "label": "BCH - Bitcoin-Cash"
    },
    {
      "value": "BCN",
      "label": "BCN - Bytecoin"
    },
    {
      "value": "BCPT",
      "label": "BCPT - BlockMason-Credit-Protocol-Token"
    },
    {
      "value": "BCX",
      "label": "BCX - BitcoinX"
    },
    {
      "value": "BCY",
      "label": "BCY - BitCrystals"
    },
    {
      "value": "BDL",
      "label": "BDL - Bitdeal"
    },
    {
      "value": "BEE",
      "label": "BEE - Bee-Token"
    },
    {
      "value": "BELA",
      "label": "BELA - BelaCoin"
    },
    {
      "value": "BET",
      "label": "BET - DAO-Casino"
    },
    {
      "value": "BFT",
      "label": "BFT - BF-Token"
    },
    {
      "value": "BIS",
      "label": "BIS - Bismuth"
    },
    {
      "value": "BITB",
      "label": "BITD - BitBean"
    },
    {
      "value": "BITBTC",
      "label": "BITBTC - BitBTC"
    },
    {
      "value": "BITCNY",
      "label": "BITCNY - BitCNY"
    },
    {
      "value": "BITEUR",
      "label": "BITEUR - BitEUR"
    },
    {
      "value": "BITGOLD",
      "label": "BITGOLD - BitGOLD"
    },
    {
      "value": "BITSILVER",
      "label": "BITSILVER - BitSILVER"
    },
    {
      "value": "BITUSD",
      "label": "BITUSD - BitUSD"
    },
    {
      "value": "BIX",
      "label": "BIX - Bibox-Token"
    },
    {
      "value": "BLITZ",
      "label": "BLITZ - Blitzcash"
    },
    {
      "value": "BLK",
      "label": "BLK - Blackcoin"
    },
    {
      "value": "BLN",
      "label": "BLN - Bolenum"
    },
    {
      "value": "BLOCK",
      "label": "BLOCK - Blocknet"
    },
    {
      "value": "BLZ",
      "label": "BLZ - Bluzelle"
    },
    {
      "value": "BMC",
      "label": "BMC - Blackmoon-Crypto"
    },
    {
      "value": "BNB",
      "label": "BNB - Binance-Coin"
    },
    {
      "value": "BNT",
      "label": "BNT - Bancor-Network-Token"
    },
    {
      "value": "BNTY",
      "label": "BNTY - Bounty0x"
    },
    {
      "value": "BOST",
      "label": "BOST - BoostCoin"
    },
    {
      "value": "BOT",
      "label": "BOT - Bodhi"
    },
    {
      "value": "BQ",
      "label": "BQ - bitqy"
    },
    {
      "value": "BRD",
      "label": "BRD - Bread"
    },
    {
      "value": "BRK",
      "label": "BRK - Breakout-Coin"
    },
    {
      "value": "BRX",
      "label": "BRX - Breakout-Stake"
    },
    {
      "value": "BTA",
      "label": "BTA - Bata"
    },
    {
      "value": "BTC",
      "label": "BTC - Bitcoin"
    },
    {
      "value": "BTCD",
      "label": "BTCD - BitcoinDark"
    },
    {
      "value": "BTCP",
      "label": "BTCP - Bitcoin-Private"
    },
    {
      "value": "BTG",
      "label": "BTG - Bitcoin-Gold"
    },
    {
      "value": "BTM",
      "label": "BTM - Bitmark"
    },
    {
      "value": "BTS",
      "label": "BTS - BitShares"
    },
    {
      "value": "BTSR",
      "label": "BTSR - BTSR"
    },
    {
      "value": "BTX",
      "label": "BTX - Bitcore"
    },
    {
      "value": "BURST",
      "label": "BURST - Burstcoin"
    },
    {
      "value": "BUZZ",
      "label": "BUZZ - BuzzCoin"
    },
    {
      "value": "BYC",
      "label": "BYC - Bytecent"
    },
    {
      "value": "BYTOM",
      "label": "BYTOM - Bytom"
    },
    {
      "value": "C20",
      "label": "C20 - Crypto20"
    },
    {
      "value": "CANN",
      "label": "CANN - CannabisCoin"
    },
    {
      "value": "CAT",
      "label": "CAT - BlockCAT"
    },
    {
      "value": "CCRB",
      "label": "CCRB - CryptoCarbon"
    },
    {
      "value": "CDT",
      "label": "CDT - Blox"
    },
    {
      "value": "CFI",
      "label": "CFI - Cofound-it"
    },
    {
      "value": "CHAT",
      "label": "CHAT - ChatCoin"
    },
    {
      "value": "CHIPS",
      "label": "CHIPS - Chips"
    },
    {
      "value": "CLAM",
      "label": "CLAM - Clams"
    },
    {
      "value": "CLOAK",
      "label": "CLOAK - CloakCoin"
    },
    {
      "value": "CMP",
      "label": "CMP - Compcoin"
    },
    {
      "value": "CMT",
      "label": "CMT - CyberMiles"
    },
    {
      "value": "CND",
      "label": "CND - Cindicator"
    },
    {
      "value": "CNX",
      "label": "CNX - Cryptonex"
    },
    {
      "value": "COFI",
      "label": "COFI - CoinFi"
    },
    {
      "value": "COSS",
      "label": "COSS - COSS"
    },
    {
      "value": "COVAL",
      "label": "COVAL - Circuits-Of-Value"
    },
    {
      "value": "CRBIT",
      "label": "CRBIT - CreditBIT"
    },
    {
      "value": "CREA",
      "label": "CREA - CreativeCoin"
    },
    {
      "value": "CREDO",
      "label": "CREDO - Credo"
    },
    {
      "value": "CRW",
      "label": "CRW - Crown"
    },
    {
      "value": "CSNO",
      "label": "CSNO - BitDice"
    },
    {
      "value": "CTR",
      "label": "CTR - Centra"
    },
    {
      "value": "CTXC",
      "label": "CTXC - Cortex"
    },
    {
      "value": "CURE",
      "label": "CURE - CureCoin"
    },
    {
      "value": "CVC",
      "label": "CVC - Civic"
    },
    {
      "value": "DAI",
      "label": "DAI - Dai"
    },
    {
      "value": "DAR",
      "label": "DAR - Darcrus"
    },
    {
      "value": "DASH",
      "label": "DASH - Dash"
    },
    {
      "value": "DATA",
      "label": "DATA - DATAcoin"
    },
    {
      "value": "DAY",
      "label": "DAY - Chronologic"
    },
    {
      "value": "DBC",
      "label": "BDC - DeepBrain-Chain"
    },
    {
      "value": "DBIX",
      "label": "DBIX - DubaiCoin"
    },
    {
      "value": "DCN",
      "label": "DCN - Dentacoin"
    },
    {
      "value": "DCR",
      "label": "DCR - Decred"
    },
    {
      "value": "DCT",
      "label": "DCT - DECENT"
    },
    {
      "value": "DDF",
      "label": "DDF - Digital-Developers-Fund"
    },
    {
      "value": "DENT",
      "label": "DENT - Dent"
    },
    {
      "value": "DFS",
      "label": "DFS - DFSCoin"
    },
    {
      "value": "DGB",
      "label": "DGB - DigiByte"
    },
    {
      "value": "DGC",
      "label": "DGC - Digitalcoin"
    },
    {
      "value": "DGD",
      "label": "DGD - DigixDAO"
    },
    {
      "value": "DICE",
      "label": "DICE - Etheroll"
    },
    {
      "value": "DLT",
      "label": "DLT - Agrello-Delta"
    },
    {
      "value": "DMD",
      "label": "DMD - Diamond"
    },
    {
      "value": "DMT",
      "label": "DMT - DMarket"
    },
    {
      "value": "DNT",
      "label": "DNT - district0x"
    },
    {
      "value": "DOGE",
      "label": "DOGE - DogeCoin"
    },
    {
      "value": "DOPE",
      "label": "DOPE - DopeCoin"
    },
    {
      "value": "DRGN",
      "label": "DRGN - Dragonchain"
    },
    {
      "value": "DTA",
      "label": "DTA - Data"
    },
    {
      "value": "DTB",
      "label": "DTB - Databits"
    },
    {
      "value": "DYN",
      "label": "DYN - Dynamic"
    },
    {
      "value": "EAC",
      "label": "EAC - EarthCoin"
    },
    {
      "value": "EBST",
      "label": "EBST - eBoost"
    },
    {
      "value": "EBTC",
      "label": "EBTC - eBTC"
    },
    {
      "value": "ECC",
      "label": "ECC - ECC"
    },
    {
      "value": "ECN",
      "label": "ECN - E-coin"
    },
    {
      "value": "EDG",
      "label": "EDG - Edgeless"
    },
    {
      "value": "EDO",
      "label": "EDO - Eidoo"
    },
    {
      "value": "EFL",
      "label": "EFL - Electronic-Gulden"
    },
    {
      "value": "EGC",
      "label": "EGC - EverGreenCoin"
    },
    {
      "value": "EKT",
      "label": "EKT - EDUCare"
    },
    {
      "value": "ELA",
      "label": "ELA - Elastos"
    },
    {
      "value": "ELEC",
      "label": "ELEC - Electrify.Asia"
    },
    {
      "value": "ELF",
      "label": "ELF - aelf"
    },
    {
      "value": "ELIX",
      "label": "ELIX - Elixir"
    },
    {
      "value": "EMB",
      "label": "EMB - Embercoin"
    },
    {
      "value": "EMC",
      "label": "EMC - Emercoin"
    },
    {
      "value": "EMC2",
      "label": "EMC2 - Einsteinium"
    },
    {
      "value": "ENG",
      "label": "ENG - Enigma"
    },
    {
      "value": "ENJ",
      "label": "ENJ - Enjin-Coin"
    },
    {
      "value": "ENRG",
      "label": "ENRG - EnergyCoin"
    },
    {
      "value": "EOS",
      "label": "EOS - EOS"
    },
    {
      "value": "EOT",
      "label": "EOT - EOT-Token"
    },
    {
      "value": "EQT",
      "label": "EQT - EquiTrader"
    },
    {
      "value": "ERC",
      "label": "ERC - EuropeCoin"
    },
    {
      "value": "ETC",
      "label": "ETC - Ethereum-Classic"
    },
    {
      "value": "ETH",
      "label": "ETH - Ethereum"
    },
    {
      "value": "ETHD",
      "label": "ETHD - Ethereum-Dark"
    },
    {
      "value": "ETHOS",
      "label": "ETHOS - Ethos"
    },
    {
      "value": "ETN",
      "label": "ETN - Electroneum"
    },
    {
      "value": "ETP",
      "label": "ETP - Metaverse-Entropy"
    },
    {
      "value": "ETT",
      "label": "ETT - EncryptoTel"
    },
    {
      "value": "EVE",
      "label": "EVE - Devery"
    },
    {
      "value": "EVX",
      "label": "EVX - Everex"
    },
    {
      "value": "EXCL",
      "label": "EXCL - ExclusiveCoin"
    },
    {
      "value": "EXP",
      "label": "EXP - Expanse"
    },
    {
      "value": "FCT",
      "label": "FCT - Factom"
    },
    {
      "value": "FLDC",
      "label": "FLDC - FoldingCoin"
    },
    {
      "value": "FLO",
      "label": "FLO - FlorinCoin"
    },
    {
      "value": "FLT",
      "label": "FLT - FlutterCoin"
    },
    {
      "value": "FRST",
      "label": "FRST - FirstCoin"
    },
    {
      "value": "FTC",
      "label": "FTC - Feathercoin"
    },
    {
      "value": "FUEL",
      "label": "FUEL - Etherparty"
    },
    {
      "value": "FUN",
      "label": "FUN - FunFair"
    },
    {
      "value": "GAM",
      "label": "GAM - Gambit"
    },
    {
      "value": "GAME",
      "label": "GAME - GameCredits"
    },
    {
      "value": "GAS",
      "label": "GAS - Gas"
    },
    {
      "value": "GBG",
      "label": "GBG - Golos Gold"
    },
    {
      "value": "GBX",
      "label": "GBX - GoByte"
    },
    {
      "value": "GBYTE",
      "label": "GBYTE - Byteball"
    },
    {
      "value": "GCR",
      "label": "GCR - GCRCoin"
    },
    {
      "value": "GEO",
      "label": "GEO - GeoCoin"
    },
    {
      "value": "GLD",
      "label": "GLD - GoldCoin"
    },
    {
      "value": "GNO",
      "label": "GNO - Gnosis-Token"
    },
    {
      "value": "GNT",
      "label": "GNT - Golem-Tokens"
    },
    {
      "value": "GOLOS",
      "label": "GOLOS - Golos"
    },
    {
      "value": "GRC",
      "label": "GRC - Gridcoin"
    },
    {
      "value": "GRS",
      "label": "GRS - Groestlcoin"
    },
    {
      "value": "GRWI",
      "label": "GRWI - Growers-International"
    },
    {
      "value": "GTC",
      "label": "GTC - Game"
    },
    {
      "value": "GTO",
      "label": "GTO - Gifto"
    },
    {
      "value": "GUP",
      "label": "GUP - Guppy"
    },
    {
      "value": "GVT",
      "label": "GVT - Genesis-Vision"
    },
    {
      "value": "GXS",
      "label": "GXS - GXShares"
    },
    {
      "value": "HBN",
      "label": "HBN - HoboNickels"
    },
    {
      "value": "HEAT",
      "label": "HEAT - HEAT"
    },
    {
      "value": "HMQ",
      "label": "HMQ - Humaniq"
    },
    {
      "value": "HPB",
      "label": "HPB - High-Performance-Blockchain"
    },
    {
      "value": "HSR",
      "label": "HSR - Hshare"
    },
    {
      "value": "HUSH",
      "label": "HUSH - Hush"
    },
    {
      "value": "HVN",
      "label": "HVN - Hive"
    },
    {
      "value": "HXX",
      "label": "HXX - HexxCoin"
    },
    {
      "value": "ICN",
      "label": "ICN - ICONOMI"
    },
    {
      "value": "ICX",
      "label": "ICX - ICON"
    },
    {
      "value": "IFC",
      "label": "IFC - Infinitecoin"
    },
    {
      "value": "IFT",
      "label": "IFT - investFeed"
    },
    {
      "value": "IGNIS",
      "label": "IGNIS - Ignis"
    },
    {
      "value": "INCNT",
      "label": "INCNT - Incent"
    },
    {
      "value": "IND",
      "label": "IND - Indorse-Token"
    },
    {
      "value": "INF",
      "label": "INF - InfChain"
    },
    {
      "value": "INK",
      "label": "INK - Ink"
    },
    {
      "value": "INS",
      "label": "INS - INS-Ecosystem"
    },
    {
      "value": "INSTAR",
      "label": "INSTAR - Insights-Network"
    },
    {
      "value": "INT",
      "label": "INT - Internet-Node-Token"
    },
    {
      "value": "INXT",
      "label": "INXT - Internxt"
    },
    {
      "value": "IOC",
      "label": "IOC - IOCoin"
    },
    {
      "value": "ION",
      "label": "ION - ION"
    },
    {
      "value": "IOP",
      "label": "IOP - Internet-of-People"
    },
    {
      "value": "IOST",
      "label": "IOST - IOStoken"
    },
    {
      "value": "IOTA",
      "label": "IOTA - IOTA"
    },
    {
      "value": "IOTX",
      "label": "IOTX - IoTeX"
    },
    {
      "value": "IQT",
      "label": "IQT - Iquant-Chain"
    },
    {
      "value": "ITC",
      "label": "ITC - IoT-Chain"
    },
    {
      "value": "IXC",
      "label": "IXC - iXcoin"
    },
    {
      "value": "IXT",
      "label": "IXT - InsureX"
    },
    {
      "value": "J8T",
      "label": "J8T - JET8"
    },
    {
      "value": "JNT",
      "label": "JNT - Jibrel-Network"
    },
    {
      "value": "KCS",
      "label": "KCS - KuCoin"
    },
    {
      "value": "KICK",
      "label": "KICK - KickCoin"
    },
    {
      "value": "KIN",
      "label": "KIN - KIN"
    },
    {
      "value": "KMD",
      "label": "KMD - Komodo"
    },
    {
      "value": "KNC",
      "label": "KNC - Kyber-Network"
    },
    {
      "value": "KORE",
      "label": "KORE - KoreCoin"
    },
    {
      "value": "LBC",
      "label": "LBC - LBRY-Credits"
    },
    {
      "value": "LCC",
      "label": "LCC - Litecoin-Cash"
    },
    {
      "value": "LEND",
      "label": "LEND - EthLend"
    },
    {
      "value": "LEV",
      "label": "LEV - Leverj"
    },
    {
      "value": "LGD",
      "label": "LGD - Legends-Room"
    },
    {
      "value": "LINDA",
      "label": "LINDA - Linda"
    },
    {
      "value": "LINK",
      "label": "LINK - ChainLink"
    },
    {
      "value": "LKK",
      "label": "LKK - Lykke"
    },
    {
      "value": "LMC",
      "label": "LMC - LoMoCoin"
    },
    {
      "value": "LOCI",
      "label": "LOCI - LOCIcoin"
    },
    {
      "value": "LOOM",
      "label": "LOOM - Loom-Token"
    },
    {
      "value": "LRC",
      "label": "LRC - Loopring"
    },
    {
      "value": "LSK",
      "label": "LSK - Lisk"
    },
    {
      "value": "LTC",
      "label": "LTC - Litecoin"
    },
    {
      "value": "LUN",
      "label": "LUN - Lunyr"
    },
    {
      "value": "MAID",
      "label": "MAID - MaidSafeCoin"
    },
    {
      "value": "MANA",
      "label": "MANA - Decentraland"
    },
    {
      "value": "MAX",
      "label": "MAX - Maxcoin"
    },
    {
      "value": "MBRS",
      "label": "MBRS - Embers"
    },
    {
      "value": "MCAP",
      "label": "MCAP - MCAP"
    },
    {
      "value": "MCO",
      "label": "MCO - Monaco"
    },
    {
      "value": "MDA",
      "label": "MDA - Moeda-Loyalty-Points"
    },
    {
      "value": "MEC",
      "label": "MEC - Megacoin"
    },
    {
      "value": "MED",
      "label": "MED - MediBlock"
    },
    {
      "value": "MEME",
      "label": "MEME - Memetic"
    },
    {
      "value": "MER",
      "label": "MER - Mercury"
    },
    {
      "value": "MGC",
      "label": "MGC - MergeCoin"
    },
    {
      "value": "MGO",
      "label": "MGO - MobileGo"
    },
    {
      "value": "MINEX",
      "label": "MINEX - Minex"
    },
    {
      "value": "MINT",
      "label": "MINT - Mintcoin"
    },
    {
      "value": "MITH",
      "label": "MITH - Mithril"
    },
    {
      "value": "MKR",
      "label": "MKR - Maker"
    },
    {
      "value": "MLN",
      "label": "MLN - Melon"
    },
    {
      "value": "MNE",
      "label": "MNE - Minereum"
    },
    {
      "value": "MNX",
      "label": "MNX - MinexCoin"
    },
    {
      "value": "MOD",
      "label": "MOD - Modum"
    },
    {
      "value": "MONA",
      "label": "MONA - MonaCoin"
    },
    {
      "value": "MRT",
      "label": "MRT - Miners-Reward-Token"
    },
    {
      "value": "MSP",
      "label": "MSP - Mothership"
    },
    {
      "value": "MTH",
      "label": "MTH - Monetha"
    },
    {
      "value": "MTN",
      "label": "MTN - MedToken"
    },
    {
      "value": "MUE",
      "label": "MUE - MonetaryUnit"
    },
    {
      "value": "MUSIC",
      "label": "MUSIC - Musicoin"
    },
    {
      "value": "MYB",
      "label": "MYB - MyBit-Token"
    },
    {
      "value": "MYST",
      "label": "MYST - Mysterium"
    },
    {
      "value": "MZC",
      "label": "MZC - Mazacoin"
    },
    {
      "value": "NAMO",
      "label": "NAMO - Namocoin"
    },
    {
      "value": "NANO",
      "label": "NANO - Nano"
    },
    {
      "value": "NAS",
      "label": "NAS - Nebulas-Token"
    },
    {
      "value": "NAV",
      "label": "NAV - Nav-Coin"
    },
    {
      "value": "NBT",
      "label": "NBT - NuBits"
    },
    {
      "value": "NCASH",
      "label": "NCASH - Nucleus-Vision"
    },
    {
      "value": "NDC",
      "label": "NDC - NeverDie-Coin"
    },
    {
      "value": "NEBL",
      "label": "NEBL - Neblio"
    },
    {
      "value": "NEO",
      "label": "NEO - NEO"
    },
    {
      "value": "NEOS",
      "label": "NEOS - NeosCoin"
    },
    {
      "value": "NET",
      "label": "NET - Nimiq"
    },
    {
      "value": "NLC2",
      "label": "NLC2 - NoLimitCoin"
    },
    {
      "value": "NLG",
      "label": "NLG - Gulden"
    },
    {
      "value": "NMC",
      "label": "NMC - Namecoin"
    },
    {
      "value": "NMR",
      "label": "NMR - Numeraire"
    },
    {
      "value": "NOBL",
      "label": "NOBL - NobleCoin"
    },
    {
      "value": "NOTE",
      "label": "NOTE - DNotes"
    },
    {
      "value": "NPXS",
      "label": "NPXS - Pundi-X-Token"
    },
    {
      "value": "NSR",
      "label": "NSR - NuShares"
    },
    {
      "value": "NTO",
      "label": "NTO - Fujinto"
    },
    {
      "value": "NULS",
      "label": "NULS - Nuls"
    },
    {
      "value": "NVC",
      "label": "NVC - Novacoin"
    },
    {
      "value": "NXC",
      "label": "NXC - Nexium"
    },
    {
      "value": "NXS",
      "label": "NXS - Nexus"
    },
    {
      "value": "NXT",
      "label": "NXT - Nxt"
    },
    {
      "value": "OAX",
      "label": "OAX - openANX"
    },
    {
      "value": "OBITS",
      "label": "OBITS - Obits"
    },
    {
      "value": "OCL",
      "label": "OCL - Oceanlab"
    },
    {
      "value": "OCN",
      "label": "OCN - Odyssey"
    },
    {
      "value": "ODEM",
      "label": "ODEM - ODEM"
    },
    {
      "value": "ODN",
      "label": "ODN - Obsidian"
    },
    {
      "value": "OF",
      "label": "OF - OFCOIN"
    },
    {
      "value": "OK",
      "label": "OK - OKCash"
    },
    {
      "value": "OMG",
      "label": "OMG - OmiseGo"
    },
    {
      "value": "OMNI",
      "label": "OMNI - Omni"
    },
    {
      "value": "ONION",
      "label": "ONION - DeepOnion"
    },
    {
      "value": "ONT",
      "label": "ONT - Ontology"
    },
    {
      "value": "OPT",
      "label": "OPT - Opus"
    },
    {
      "value": "OST",
      "label": "OST - Simple-Token"
    },
    {
      "value": "PART",
      "label": "PART - Particl"
    },
    {
      "value": "PASC",
      "label": "PASC - PascalCoin"
    },
    {
      "value": "PAY",
      "label": "PAY - TenX"
    },
    {
      "value": "PBL",
      "label": "PBL - Pebbles"
    },
    {
      "value": "PBT",
      "label": "PBT - Primalbase-Token"
    },
    {
      "value": "PFR",
      "label": "PFR - Payfair"
    },
    {
      "value": "PING",
      "label": "PING - CryptoPing"
    },
    {
      "value": "PINK",
      "label": "PINK - Pinkcoin"
    },
    {
      "value": "PIVX",
      "label": "PIVX - PIVX"
    },
    {
      "value": "PIX",
      "label": "PIX - Lampix"
    },
    {
      "value": "PLBT",
      "label": "PLBT - Polybius"
    },
    {
      "value": "PLR",
      "label": "PLR - Pillar"
    },
    {
      "value": "PLU",
      "label": "PLU - Pluton"
    },
    {
      "value": "POA",
      "label": "POA - POA-Network"
    },
    {
      "value": "POE",
      "label": "POE - Poet"
    },
    {
      "value": "POLY",
      "label": "POLY - Polymath"
    },
    {
      "value": "POSW",
      "label": "POSW - PoSW-Coin"
    },
    {
      "value": "POT",
      "label": "POT - PotCoin"
    },
    {
      "value": "POWR",
      "label": "POWR - Power-Ledger"
    },
    {
      "value": "PPC",
      "label": "PPC - Peercoin"
    },
    {
      "value": "PPT",
      "label": "PPT - Populous"
    },
    {
      "value": "PPY",
      "label": "PPY - Peerplays"
    },
    {
      "value": "PRG",
      "label": "PRG - Paragon-Coin"
    },
    {
      "value": "PRL",
      "label": "PRL - Oyster-Pearl"
    },
    {
      "value": "PRO",
      "label": "PRO - Propy"
    },
    {
      "value": "PST",
      "label": "PST - Primas"
    },
    {
      "value": "PTC",
      "label": "PTC - Pesetacoin"
    },
    {
      "value": "PTOY",
      "label": "PTOY - Patientory"
    },
    {
      "value": "PURA",
      "label": "PURA - Pura"
    },
    {
      "value": "QASH",
      "label": "QASH - QASH"
    },
    {
      "value": "QAU",
      "label": "QAU - Quantum"
    },
    {
      "value": "QLC",
      "label": "QLC - Qlink"
    },
    {
      "value": "QRK",
      "label": "QRK - Quark"
    },
    {
      "value": "QRL",
      "label": "QRL - Quantum-Resistant-Ledger"
    },
    {
      "value": "QSP",
      "label": "QSP - Quantstamp"
    },
    {
      "value": "QTL",
      "label": "QTL - Quatloo"
    },
    {
      "value": "QTUM",
      "label": "QTUM - Qtum"
    },
    {
      "value": "QWARK",
      "label": "QWARK - Qwark"
    },
    {
      "value": "R",
      "label": "R - Revain"
    },
    {
      "value": "RADS",
      "label": "RADS - Radium"
    },
    {
      "value": "RAIN",
      "label": "RAIN - Condensate"
    },
    {
      "value": "RBIES",
      "label": "RBIES - Rubies"
    },
    {
      "value": "RBX",
      "label": "RBX - Ripto-Bux"
    },
    {
      "value": "RBY",
      "label": "RBY - RubyCoin"
    },
    {
      "value": "RCN",
      "label": "RCN - Ripio-Credit-Network"
    },
    {
      "value": "RDD",
      "label": "RDD - ReddCoin"
    },
    {
      "value": "RDN",
      "label": "RDN - Raiden-Network-Token"
    },
    {
      "value": "REC",
      "label": "REC - Regalcoin"
    },
    {
      "value": "RED",
      "label": "RED - Redcoin"
    },
    {
      "value": "REP",
      "label": "REP - Augur"
    },
    {
      "value": "REQ",
      "label": "REQ - Request-Network"
    },
    {
      "value": "RHOC",
      "label": "RHOC - RChain"
    },
    {
      "value": "RIC",
      "label": "RIC - Riecoin"
    },
    {
      "value": "RISE",
      "label": "RISE - Rise"
    },
    {
      "value": "RLC",
      "label": "RLC- RLC-Token"
    },
    {
      "value": "RLT",
      "label": "RLT - RouletteToken"
    },
    {
      "value": "RPX",
      "label": "RPX - Red-Pulse"
    },
    {
      "value": "RRT",
      "label": "RRT - Recovery-Right-Tokens"
    },
    {
      "value": "RUFF",
      "label": "RUFF - Ruff"
    },
    {
      "value": "RUP",
      "label": "RUP - Rupee"
    },
    {
      "value": "RVT",
      "label": "RVT - Rivetz"
    },
    {
      "value": "SAFEX",
      "label": "SAFEX - SafeExchangeCoin"
    },
    {
      "value": "SALT",
      "label": "SALT - Salt"
    },
    {
      "value": "SAN",
      "label": "SAN - Santiment-Network-Token"
    },
    {
      "value": "SBD",
      "label": "SBD - Steem-Dollars"
    },
    {
      "value": "SBTC",
      "label": "SBTC - Super-Bitcoin"
    },
    {
      "value": "SC",
      "label": "SC - Siacoin"
    },
    {
      "value": "SEELE",
      "label": "SEELE - Seele"
    },
    {
      "value": "SEQ",
      "label": "SEQ - Sequence"
    },
    {
      "value": "SHIFT",
      "label": "SHIFT - SHIFT"
    },
    {
      "value": "SIB",
      "label": "SIB - SIBCoin"
    },
    {
      "value": "SIGMA",
      "label": "SIGMA - SIGMAcoin"
    },
    {
      "value": "SIGT",
      "label": "SIGT - Signatum"
    },
    {
      "value": "SJCX",
      "label": "SJCX - Storjcoin-X"
    },
    {
      "value": "SKIN",
      "label": "SKIN - SkinCoin"
    },
    {
      "value": "SKY",
      "label": "SKY - Skycoin"
    },
    {
      "value": "SLR",
      "label": "SLR - SolarCoin"
    },
    {
      "value": "SLS",
      "label": "SLS - SaluS"
    },
    {
      "value": "SMART",
      "label": "SMART - SmartCash"
    },
    {
      "value": "SMT",
      "label": "SMT - SmartMesh"
    },
    {
      "value": "SNC",
      "label": "SNC - SunContract"
    },
    {
      "value": "SNGLS",
      "label": "SNGLS - SingularDTV"
    },
    {
      "value": "SNM",
      "label": "SNM - SONM"
    },
    {
      "value": "SNRG",
      "label": "SNRG - Synergy"
    },
    {
      "value": "SNT",
      "label": "SNT - Status-Network-Token"
    },
    {
      "value": "SOC",
      "label": "SOC - All-Sports"
    },
    {
      "value": "SOUL",
      "label": "SOUL - Phantasma"
    },
    {
      "value": "SPANK",
      "label": "SPANK - SpankChain"
    },
    {
      "value": "SPC",
      "label": "SPC - SpaceChain"
    },
    {
      "value": "SPHR",
      "label": "SPHR - Sphere"
    },
    {
      "value": "SPR",
      "label": "SPR - SpreadCoin"
    },
    {
      "value": "SRN",
      "label": "SRN - Sirin-Labs-Token"
    },
    {
      "value": "START",
      "label": "START - Startcoin"
    },
    {
      "value": "STEEM",
      "label": "STEEM - Steem"
    },
    {
      "value": "STK",
      "label": "STK - STK-Token"
    },
    {
      "value": "STORJ",
      "label": "STORJ - Storj"
    },
    {
      "value": "STORM",
      "label": "STORM - Storm"
    },
    {
      "value": "STQ",
      "label": "STQ - Storiqa"
    },
    {
      "value": "STRAT",
      "label": "STRAT - Stratis"
    },
    {
      "value": "STX",
      "label": "STX - Stox"
    },
    {
      "value": "SUB",
      "label": "SUB - Substratum"
    },
    {
      "value": "SWFTC",
      "label": "SWFTC - SwftCoin"
    },
    {
      "value": "SWIFT",
      "label": "SWIFT - Bitswift"
    },
    {
      "value": "SWT",
      "label": "SWT - Swarm-City"
    },
    {
      "value": "SYNX",
      "label": "SYNX - Syndicate"
    },
    {
      "value": "SYS",
      "label": "SYS - SysCoin"
    },
    {
      "value": "TAAS",
      "label": "TAAS - Taas"
    },
    {
      "value": "TAU",
      "label": "TAU - Lamden"
    },
    {
      "value": "TCC",
      "label": "TCC - The-ChampCoin"
    },
    {
      "value": "TFL",
      "label": "TFL - True-Flip"
    },
    {
      "value": "THC",
      "label": "THC - HempCoin"
    },
    {
      "value": "THETA",
      "label": "THETA - Theta-Token"
    },
    {
      "value": "TIME",
      "label": "TIME - Time"
    },
    {
      "value": "TIX",
      "label": "TIX - Blocktix"
    },
    {
      "value": "TKN",
      "label": "TKN - TokenCard"
    },
    {
      "value": "TKR",
      "label": "TKR - Trackr"
    },
    {
      "value": "TKS",
      "label": "TKS - Tokes"
    },
    {
      "value": "TNB",
      "label": "TNB - Time-New-Bank"
    },
    {
      "value": "TNT",
      "label": "TNT - Tierion"
    },
    {
      "value": "TOA",
      "label": "TOA - ToaCoin"
    },
    {
      "value": "TRAC",
      "label": "TRAC - OriginTrail"
    },
    {
      "value": "TRC",
      "label": "TRC - Terracoin"
    },
    {
      "value": "TRCT",
      "label": "TRCT - Tracto"
    },
    {
      "value": "TRIG",
      "label": "TRIG - Triggers"
    },
    {
      "value": "TRST",
      "label": "TRST - Trustcoin"
    },
    {
      "value": "TRUE",
      "label": "TRUE - TrueChain"
    },
    {
      "value": "TRUST",
      "label": "TRUST - TrustPlus"
    },
    {
      "value": "TRX",
      "label": "TRX - Tronix"
    },
    {
      "value": "TUSD",
      "label": "TUSD - TrueUSD"
    },
    {
      "value": "TX",
      "label": "TX - TransferCoin"
    },
    {
      "value": "UBQ",
      "label": "UBQ - Ubiq"
    },
    {
      "value": "UKG",
      "label": "UKG - UnikoinGold"
    },
    {
      "value": "ULA",
      "label": "ULA - Ulatech"
    },
    {
      "value": "UNB",
      "label": "UNB - UnbreakableCoin"
    },
    {
      "value": "UNITY",
      "label": "UNITY - SuperNET"
    },
    {
      "value": "UNO",
      "label": "UNO - Unobtanium"
    },
    {
      "value": "UNY",
      "label": "UNY - Unity-Ingot"
    },
    {
      "value": "UP",
      "label": "UP - UpToken"
    },
    {
      "value": "URO",
      "label": "URO - Uro"
    },
    {
      "value": "USDT",
      "label": "USDT - Tether"
    },
    {
      "value": "UTK",
      "label": "UTK - UTrust"
    },
    {
      "value": "VEE",
      "label": "VEE - BLOCKv"
    },
    {
      "value": "VEN",
      "label": "VEN - VeChain"
    },
    {
      "value": "VERI",
      "label": "VERI - Veritaseum"
    },
    {
      "value": "VIA",
      "label": "VIA - Viacoin"
    },
    {
      "value": "VIB",
      "label": "VIB - Viberate"
    },
    {
      "value": "VIBE",
      "label": "VIBE - Vibe"
    },
    {
      "value": "VIVO",
      "label": "VIVO - VIVO"
    },
    {
      "value": "VOISE",
      "label": "VOISE - Voise"
    },
    {
      "value": "VOX",
      "label": "VOX - Voxels"
    },
    {
      "value": "VPN",
      "label": "VPN - VPNCoin"
    },
    {
      "value": "VRC",
      "label": "VRC - Vericoin"
    },
    {
      "value": "VRM",
      "label": "VRM - Verium"
    },
    {
      "value": "VRS",
      "label": "VRS - Veros"
    },
    {
      "value": "VSL",
      "label": "VSL - vSlice"
    },
    {
      "value": "VTC",
      "label": "VTC - Vertcoin"
    },
    {
      "value": "VTR",
      "label": "VTR - vTorrent"
    },
    {
      "value": "WABI",
      "label": "WABI - WaBi"
    },
    {
      "value": "WAN",
      "label": "WAN - Wanchain"
    },
    {
      "value": "WAVES",
      "label": "WAVES - Waves"
    },
    {
      "value": "WAX",
      "label": "WAX - Wax-Token"
    },
    {
      "value": "WCT",
      "label": "WCT - Waves-Community"
    },
    {
      "value": "WDC",
      "label": "WDC - WorldCoin"
    },
    {
      "value": "WGO",
      "label": "WGO - WavesGo"
    },
    {
      "value": "WGR",
      "label": "WGR - Wagerr"
    },
    {
      "value": "WINGS",
      "label": "WINGS - Wings"
    },
    {
      "value": "WPR",
      "label": "WPR - WePower"
    },
    {
      "value": "WTC",
      "label": "WTC - Walton"
    },
    {
      "value": "WTT",
      "label": "WTT - Giga-Watt-Token"
    },
    {
      "value": "XAS",
      "label": "XAS - Asch"
    },
    {
      "value": "XAUR",
      "label": "XAUR - Xaurum"
    },
    {
      "value": "XBC",
      "label": "XBC - Bitcoin-Plus"
    },
    {
      "value": "XBY",
      "label": "XBY - XtraBYtes"
    },
    {
      "value": "XCN",
      "label": "XCN - Cryptonite"
    },
    {
      "value": "XCP",
      "label": "XCP - Counterparty"
    },
    {
      "value": "XDN",
      "label": "XDN - DigitalNote"
    },
    {
      "value": "XEL",
      "label": "XEL - Elastic"
    },
    {
      "value": "XEM",
      "label": "XEM - NEM"
    },
    {
      "value": "XID",
      "label": "XID - Sphere-Identity"
    },
    {
      "value": "XLM",
      "label": "XLM - Stellar"
    },
    {
      "value": "XMG",
      "label": "XMG - Magi"
    },
    {
      "value": "XMR",
      "label": "XMR - Monero"
    },
    {
      "value": "XMT",
      "label": "XMT - Metal"
    },
    {
      "value": "XMY",
      "label": "XMY - Myriadcoin"
    },
    {
      "value": "XPM",
      "label": "XPM - Primecoin"
    },
    {
      "value": "XRL",
      "label": "XRL - Rialto"
    },
    {
      "value": "XRP",
      "label": "XRP - Ripple"
    },
    {
      "value": "XSPEC",
      "label": "XSPEC - Spectrecoin"
    },
    {
      "value": "XST",
      "label": "XST - Stealthcoin"
    },
    {
      "value": "XTZ",
      "label": "XTZ - Tezos"
    },
    {
      "value": "XUC",
      "label": "XUC - Exchange-Union"
    },
    {
      "value": "XVC",
      "label": "XVC - Vcash"
    },
    {
      "value": "XVG",
      "label": "XVG - Verge"
    },
    {
      "value": "XWC",
      "label": "XWC - WhiteCoin"
    },
    {
      "value": "XZC",
      "label": "XZC - ZCoin"
    },
    {
      "value": "XZR",
      "label": "XZR - ZrCoin"
    },
    {
      "value": "YEE",
      "label": "YEE - Yee"
    },
    {
      "value": "YOYOW",
      "label": "YOYOW - YOYOW"
    },
    {
      "value": "ZCC",
      "label": "ZCC - ZcCoin"
    },
    {
      "value": "ZCL",
      "label": "ZCL - Zclassic"
    },
    {
      "value": "ZCO",
      "label": "ZCO - Zebi"
    },
    {
      "value": "ZEC",
      "label": "ZEC - Zcash"
    },
    {
      "value": "ZEN",
      "label": "ZEN - ZenCash"
    },
    {
      "value": "ZET",
      "label": "ZET - Zetacoin"
    },
    {
      "value": "ZIL",
      "label": "ZIL - Zilliqa"
    },
    {
      "value": "ZLA",
      "label": "ZLA - Zilla"
    },
    {
      "value": "ZRX",
      "label": "ZRX - 0x"
    }
  ];
  class SelectOption extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            value: null,
            placeholder: 'Search / Select Crypto Currencies...'
          }
    
        this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange = (value) => {
      this.setState({ value });
    
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