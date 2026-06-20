const NAMES = [
    {
        number: 1,
        arabic: "ٱلرَّحْمَٰنُ",
        transliteration: "Ar-Raḥmān", 
        meaning: " The Beneficent ",
        reflection: " "
    },
    {
        number: 2,
        arabic: "ٱلرَّحِيمُ",
        transliteration: "Ar-Raḥīm", 
        meaning: " The Especially Merciful ",
        reflection: " "
    },
    {
        number: 3,
        arabic: "ٱلْمَلِكُ",
        transliteration: "Al-Malik", 
        meaning: " The King and Owner of Dominion ",
        reflection: " "
    },
    {
        number: 4,
        arabic: "ٱلْقُدُّوسُ",
        transliteration: "Al-Quddūs", 
        meaning: " The Absolutely Pure and Perfect ",
        reflection: " "
    },
    {
        number: 5,
        arabic: "ٱلسَّلَامُ",
        transliteration: "As-Salām", 
        meaning: " The Source of Peace, The Flawless ",
        reflection: " "
    },
    {
        number: 6,
        arabic: "ٱلْمُؤْمِنُ",
        transliteration: "Al-Mu’min", 
        meaning: " The Granter of Security and Faith ",
        reflection: " "
    },
    {
        number: 7,
        arabic: "ٱلْمُهَيْمِنُ",
        transliteration: "Al-Muhaymin", 
        meaning: " The Guardian, The Witness, The Overseer ",
        reflection: " "
    },
    {
        number: 8,
        arabic: "ٱلْعَزِيزُ",
        transliteration: "Al-‘Azīz", 
        meaning: " The Almighty, The All-Powerful, The Invincible, The Honorable ",
        reflection: " "
    },
    {
        number: 9,
        arabic: "ٱلْجَبَّارُ",
        transliteration: "Al-Jabbār", 
        meaning: " The Compeller, The Restorer ",
        reflection: " "
    },
    {
        number: 10,
        arabic: "ٱلْمُتَكَبِّرُ",
        transliteration: "Al-Mutakabbir", 
        meaning: " The Supreme in Glory, The Rightfully Proud ",
        reflection: " "
    },
    {
        number: 11,
        arabic: "ٱلْخَٰلِقُ",
        transliteration: "Al-Khāliq", 
        meaning: " The Creator, The Maker ",
        reflection: " "
    },
    {
        number: 12,
        arabic: " ٱلْبَارِئُ ",
        transliteration: " Al-Bāriʾ ", 
        meaning: " The Originator, The Inventor ",
        reflection: " "
    },
    {
        number: 13,
        arabic: " ٱلْمُصَوِّرُ ",
        transliteration: " Al-Muṣawwir ", 
        meaning: " The Flawless Shaper ",
        reflection: " "
    },
    {
        number: 14,
        arabic: " ٱلْغَفَّارُ ",
        transliteration: " Al-Ghaffār ", 
        meaning: " The Constant Forgiver, The Great Forgiver ",
        reflection: " "
    },
    {
        number: 15,
        arabic: " ٱلْقَهَّارُ ",
        transliteration: " Al-Qahhār ", 
        meaning: " The Subduer, The Ever-Dominating ",
        reflection: " "
    },
    {
        number: 16,
        arabic: " ٱلْوَهَّابُ ",
        transliteration: " Al-Wahhāb ", 
        meaning: " The Giver of Gifts, The Bestower ",
        reflection: " "
    },
    {
        number: 17,
        arabic: " ٱلرَّزَّاقُ ",
        transliteration: " Ar-Razzāq ", 
        meaning: " The Ever-Providing, The Constant Provider ",
        reflection: " "
    },
    {
        number: 18,
        arabic: " ٱلْفَتَّاحُ ",
        transliteration: " Al-Fattāḥ ", 
        meaning: " The Opener, The Judge ",
        reflection: " "
    },
    {
        number: 19,
        arabic: " ٱلْعَلِيمُ ",
        transliteration: " Al-ʿAlīm ", 
        meaning: " The All-Knowing, The Omniscient ",
        reflection: " "
    },
    {
        number: 20,
        arabic: " ٱلْقَابِضُ ",
        transliteration: " Al-Qābiḍ ", 
        meaning: " The Withholder, The Restrainer ",
        reflection: " "
    },
    {
        number: 21,
        arabic: " ٱلْبَاسِطُ ",
        transliteration: " Al-Bāsiṭ ", 
        meaning: " The Extender, The Expander ",
        reflection: " "
    },
    {
        number: 22,
        arabic: " ٱلْخَافِضُ ",
        transliteration: " Al-Khāfiḍ ", 
        meaning: " The Reducer, The Abaser ",
        reflection: " "
    },
    {
        number: 23,
        arabic: " ٱلرَّافِعُ ",
        transliteration: " Ar-Rāfiʿ ", 
        meaning: " The Exalter, The Elevator ",
        reflection: " "
    },
    {
        number: 24,
        arabic: " ٱلْمُعِزُّ ",
        transliteration: " Al-Muʿizz ", 
        meaning: " The Honourer, The Bestower of Honor ",
        reflection: " "
    },
    {
        number: 25,
        arabic: " ٱلْمُذِلُّ ",
        transliteration: " Al-Mudhil ", 
        meaning: " The Dishonourer, The Humiliator ",
        reflection: " "
    },
    {
        number: 26,
        arabic: " ٱلسَّمِيعُ ",
        transliteration: " As-Samīʿ ", 
        meaning: " The All-Hearing ",
        reflection: " "
    },
    {
        number: 27,
        arabic: " ٱلْبَصِيرُ ",
        transliteration: " Al-Baṣīr ", 
        meaning: " The All-Seeing ",
        reflection: " "
    },
    {
        number: 28,
        arabic: " ٱلْحَكَمُ ",
        transliteration: " Al-Ḥakam ", 
        meaning: " The Judge, The Giver of Justice ",
        reflection: " "
    },
    {
        number: 29,
        arabic: " ٱلْعَدْلُ ",
        transliteration: " Al-‘Adl ", 
        meaning: " The Utterly Just ",
        reflection: " "
    },
    {
        number: 30,
        arabic: " ٱللَّطِيفُ ",
        transliteration: " Al-Laṭīf ", 
        meaning: " The Most Gentle, The Subtle One ",
        reflection: " "
    },
    {
        number: 31,
        arabic: " ٱلْخَبِيرُ ",
        transliteration: " Al-Khabīr ", 
        meaning: " The All-Aware, The All-Acquainted ",
        reflection: " "
    },
    {
        number: 32,
        arabic: " ٱلْحَلِيمُ ",
        transliteration: " Al-Ḥalīm ", 
        meaning: " The Most Forbearing ",
        reflection: " "
    },
    {
        number: 33,
        arabic: " ٱلْعَظِيمُ ",
        transliteration: " Al-ʿAẓīm ", 
        meaning: " The Magnificent, The Supreme ",
        reflection: " "
    },
    {
        number: 34,
        arabic: " ٱلْغَفُورُ ",
        transliteration: " Al-Ghafūr ", 
        meaning: " The Forgiving, The Exceedingly Forgiving ",
        reflection: " "
    },
    {
        number: 35,
        arabic: " ٱلشَّكُورُ ",
        transliteration: " Ash-Shakūr ", 
        meaning: " The Most Appreciative ",
        reflection: " "
    },
    {
        number: 36,
        arabic: " ٱلْعَلِيُّ ",
        transliteration: " Al-ʿAlī ", 
        meaning: " The Most High, The Exalted ",
        reflection: " "
    },
    {
        number: 37,
        arabic: " ٱلْكَبِيرُ ",
        transliteration: " Al-Kabīr ", 
        meaning: " The Greatest, The Most Grand ",
        reflection: " "
    },
    {
        number: 38,
        arabic: " ٱلْحَفِيظُ ",
        transliteration: " Al-Ḥafīẓ ", 
        meaning: " The Preserver, The All-Heedful and All-Protecting ",
        reflection: " "
    },
    {
        number: 39,
        arabic: " ٱلْمُقِيتُ ",
        transliteration: " Al-Muqīt ", 
        meaning: " The Nourisher, The All-Powerful Maintainer ",
        reflection: " "
    },
    {
        number: 40,
        arabic: " ٱلْحَسِيبُ ",
        transliteration: " Al-Ḥasīb ", 
        meaning: " The Reckoner ",
        reflection: " "
    },
    {
        number: 41,
        arabic: " ٱلْجَلِيلُ ",
        transliteration: " Al-Jalīl ", 
        meaning: " The Majestic ",
        reflection: " "
    },
    {
        number: 42,
        arabic: " ٱلْكَرِيمُ ",
        transliteration: " Al-Karīm ", 
        meaning: " The Most Generous, The Most Noble ",
        reflection: " "
    },
    {
        number: 43,
        arabic: " ٱلرَّقِيبُ ",
        transliteration: " Ar-Raqīb ", 
        meaning: " The Watchful, The All-Watchful ",
        reflection: " "
    },
    {
        number: 44,
        arabic: " ٱلْمُجِيبُ ",
        transliteration: " Al-Mujīb ", 
        meaning: " The Responsive, The Answerer ",
        reflection: " "
    },
    {
        number: 45,
        arabic: " ٱلْوَاسِعُ ",
        transliteration: " Al-Wāsiʿ ", 
        meaning: " The All-Encompassing, the Boundless ",
        reflection: " "
    },
    {
        number: 46,
        arabic: " ٱلْحَكِيمُ ",
        transliteration: " Al-Ḥakīm ", 
        meaning: " The All-Wise ",
        reflection: " "
    },
    {
        number: 47,
        arabic: " ٱلْوَدُودُ ",
        transliteration: " Al-Wadūd ", 
        meaning: " The Most Loving ",
        reflection: " "
    },
    {
        number: 48,
        arabic: " ٱلْمَجِيدُ ",
        transliteration: " Al-Majīd ", 
        meaning: " The All-Glorious, The Ever-Majestic ",
        reflection: " "
    },
    {
        number: 49,
        arabic: " ٱلْبَاعِثُ ",
        transliteration: " Al-Bāʿith ", 
        meaning: " The Infuser of New Life, The Resurrector ",
        reflection: " "
    },
    {
        number: 50,
        arabic: " ٱلشَّهِيدُ ",
        transliteration: " As-Shahīd ", 
        meaning: " The All-Witnessing ",
        reflection: " "
    },
    {
        number: 51,
        arabic: " ٱلْحَقُّ ",
        transliteration: " Al-Ḥaqq ", 
        meaning: " The Absolute Truth ",
        reflection: " "
    },
    {
        number: 52,
        arabic: " ٱلْوَكِيلُ ",
        transliteration: " Al-Wakīl ", 
        meaning: " The Trustee, The Disposer of Affairs ",
        reflection: " "
    },
    {
        number: 53,
        arabic: " ٱلْقَوِيُّ ",
        transliteration: " Al-Qawiyy ", 
        meaning: " The All-Strong ",
        reflection: " "
    },
    {
        number: 54,
        arabic: " ٱلْمَتِينُ ",
        transliteration: " Al-Matīn ", 
        meaning: " The Firm, The Steadfast ",
        reflection: " "
    },
    {
        number: 55,
        arabic: " ٱلْوَلِيُّ ",
        transliteration: " Al-Waliyy ", 
        meaning: " The Protector, The Guardian ",
        reflection: " "
    },
    {
        number: 56,
        arabic: " ٱلْحَمِيدُ ",
        transliteration: " Al-Ḥamīd ", 
        meaning: " The Praiseworthy, The Most Praised ",
        reflection: " "
    },
    {
        number: 57,
        arabic: " ٱلْمُحْصِي ",
        transliteration: " Al-Muḥṣī ", 
        meaning: " The All-Enumerating, The Counter ",
        reflection: " "
    },
    {
        number: 58,
        arabic: " ٱلْمُبْدِئُ ",
        transliteration: " Al-Mubdiʾ ", 
        meaning: " The Originator, The Initiator ",
        reflection: " "
    },
    {
        number: 59,
        arabic: " ٱلْمُعِيدُ ",
        transliteration: " Al-Muʿīd ", 
        meaning: " The Restorer, The Reviver ",
        reflection: " "
    },
    {
        number: 60,
        arabic: " ٱلْمُحْيِي ",
        transliteration: " Al-Muḥyī ", 
        meaning: " The Giver of Life ",
        reflection: " "
    },
    {
        number: 61,
        arabic: " ٱلْمُمِيتُ ",
        transliteration: " Al-Mumīt ", 
        meaning: " The Taker of Life, The Causer of Death ",
        reflection: " "
    },
    {
        number: 62,
        arabic: " ٱلْحَيُّ ",
        transliteration: "Al-Ḥayy", 
        meaning: " The Ever-Living ",
        reflection: " "
    },
    {
        number: 63,
        arabic: " ٱلْقَيُّومُ ",
        transliteration: " Al-Qayyūm ", 
        meaning: " The Sustainer, The Self-Subsisting ",
        reflection: " "
    },
    {
        number: 64,
        arabic: " ٱلْوَاجِدُ ",
        transliteration: " Al-Wājid ", 
        meaning: " The Ever-Wealthy, The Self-Sufficient ",
        reflection: " "
    },
    {
        number: 65,
        arabic: "ٱلْمَاجِدُ",
        transliteration: " Al-Mājid ", 
        meaning: " The Noble, The Generous ",
        reflection: " "
    },
    {
        number: 66,
        arabic: " ٱلْوَاحِدُ ",
        transliteration: " Al-Wāḥid ", 
        meaning: " The One, The Indivisible ",
        reflection: " "
    },
    {
        number: 67,
        arabic: " ٱلْأَحَدُ ",
        transliteration: " Al-Aḥad ", 
        meaning: " The Unique, The Only One ",
        reflection: " "
    },
    {
        number: 68,
        arabic: " ٱلصَّمَدُ ",
        transliteration: " Aṣ-Ṣamad ", 
        meaning: " The Self-Subsisting, The One Upon Whom All Depend ",
        reflection: " "
    },
    {
        number: 69,
        arabic: " ٱلْقَادِرُ ",
        transliteration: " Al-Qādir ", 
        meaning: " The Omnipotent, The All-Able ",
        reflection: " "
    },
    {
        number: 70,
        arabic: " ٱلْمُقْتَدِرُ ",
        transliteration: " Al-Muqtadir ", 
        meaning: " The All-Powerful, The Dominant ",
        reflection: " "
    },
    {
        number: 71,
        arabic: " ٱلْمُقَدِّمُ ",
        transliteration: " Al-Muqaddim ", 
        meaning: " The Expediter, The Promoter ",
        reflection: " "
    },
    {
        number: 72,
        arabic: " ٱلْمُؤَخِّرُ ",
        transliteration: " Al-Muʾakhkhir ", 
        meaning: " The Delayer, The Postponer ",
        reflection: " "
    },
    {
        number: 73,
        arabic: " ٱلْأَوَّلُ ",
        transliteration: " Al-Awwal ", 
        meaning: " The First, The Pre-Existing ",
        reflection: " "
    },
    {
        number: 74,
        arabic: " ٱلْآخِرُ ",
        transliteration: " Al-Ākhir ", 
        meaning: " The Last, The Ever-Remaining ",
        reflection: " "
    },
    {
        number: 75,
        arabic: " ٱلظَّاهِرُ ",
        transliteration: " Aẓ-Ẓāhir ", 
        meaning: " The Manifest, The Highest ",
        reflection: " "
    },
    {
        number: 76,
        arabic: " ٱلْبَاطِنُ ",
        transliteration: " Al-Bāṭin ", 
        meaning: " The Hidden One, Knower of the Hidden ",
        reflection: " "
    },
    {
        number: 77,
        arabic: " ٱلْوَالِي ",
        transliteration: " Al-Wālī ", 
        meaning: " The Sole Governor ",
        reflection: " "
    },
    {
        number: 78,
        arabic: " ٱلْمُتَعَالِي ",
        transliteration: " Al-Mutaʿālī ", 
        meaning: " The Self-Exalted ",
        reflection: " "
    },
    {
        number: 79,
        arabic: " ٱلْبَرُّ ",
        transliteration: " Al-Barr ", 
        meaning: " The Source of All Goodness ",
        reflection: " "
    },
    {
        number: 80,
        arabic: " ٱلتَّوَابُ ",
        transliteration: " At-Tawwāb ", 
        meaning: " The Accepter of Repentance, The Ever-Relenting ",
        reflection: " "
    },
    {
        number: 81,
        arabic: " ٱلْمُنْتَقِمُ ",
        transliteration: " Al-Muntaqim ", 
        meaning: " The Avenger ",
        reflection: " "
    },
    {
        number: 82,
        arabic: " ٱلْعَفُوُّ ",
        transliteration: " Al-ʿAfūw ", 
        meaning: " The Pardoner ",
        reflection: " "
    },
    {
        number: 83,
        arabic: " ٱلرَّءُوفُ ",
        transliteration: " Ar-Raʾūf ", 
        meaning: " The Most Kind ",
        reflection: " "
    },
    {
        number: 84,
        arabic: " مَالِكُ ٱلْمُلْكِ ",
        transliteration: " Mālik al-Mulk ", 
        meaning: " Master of the Dominion, Owner of the Kingdom ",
        reflection: " "
    },
    {
        number: 85,
        arabic: " ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ ",
        transliteration: " Dhū al-Jalāli wa’l-Ikrām ", 
        meaning: " Possessor of Glory and Honour ",
        reflection: " "
    },
    {
        number: 86,
        arabic: " ٱلْمُقْسِطُ ",
        transliteration: " Al-Muqsiṭ ", 
        meaning: " The Just One ",
        reflection: " "
    },
    {
        number: 87,
        arabic: " ٱلْجَامِعُ ",
        transliteration: " Al-Jāmiʿ ", 
        meaning: " The Gatherer, The Uniter ",
        reflection: " "
    },
    {
        number: 88,
        arabic: " ٱلْغَنِيُّ ",
        transliteration: " Al-Ghaniyy ", 
        meaning: " The Self-Sufficient, The Free of All Need ",
        reflection: " "
    },
    {
        number: 89,
        arabic: " ٱلْمُغْنِيُ ",
        transliteration: " Al-Mughnī ", 
        meaning: " The Enricher ",
        reflection: " "
    },
    {
        number: 90,
        arabic: " ٱلْمَانِعُ ",
        transliteration: " Al-Māniʿ ", 
        meaning: " The Withholder ",
        reflection: " "
    },
    {
        number: 91,
        arabic: " ٱلضَّارُّ ",
        transliteration: " Aḍ-Ḍārr ", 
        meaning: " The Creator of Harm ",
        reflection: " "
    },
    {
        number: 92,
        arabic: " ٱلنَّافِعُ ",
        transliteration: " An-Nāfiʿ ", 
        meaning: " The Propitious, The Benefactor ",
        reflection: " "
    },
    {
        number: 93,
        arabic: " ٱلنُّورُ ",
        transliteration: " An-Nūr ", 
        meaning: " The Light ",
        reflection: " "
    },
    {
        number: 94,
        arabic: " ٱلْهَادِي ",
        transliteration: " Al-Hādī ", 
        meaning: " The Guide ",
        reflection: " "
    },
    {
        number: 95,
        arabic: " ٱلْبَدِيعُ ",
        transliteration: " Al-Badīʿ", 
        meaning: " The Incomparable Originator ",
        reflection: " "
    },
    {
        number: 96,
        arabic: " ٱلْبَاقِي ",
        transliteration: " Al-Bāqī ", 
        meaning: " The Ever-Lasting ",
        reflection: " "
    },
    {
        number: 97,
        arabic: " ٱلْوَارِثُ ",
        transliteration: " Al-Wāriṯ ", 
        meaning: " The Inheritor ",
        reflection: " "
    },
    {
        number: 98,
        arabic: "ٱلرَّشِيدُ",
        transliteration: " Ar-Rashīd ", 
        meaning: " The Guide to the Right Path ",
        reflection: " "
    },
    {
        number: 99,
        arabic: " ٱلصَّبُورُ ",
        transliteration: " Aṣ-Ṣabūr ", 
        meaning: " The Patient ",
        reflection: " "
    }
]
module.exports = { NAMES };