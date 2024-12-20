import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
      id: "q1",
      text: "Apa jenis sayap yang dimiliki serangga ini?",
      options: [
        {
          text: "Sayap keras yang melindungi tubuh",
          weight: 3,
          category: "elytra",
        },
        {
          text: "Sayap transparan dengan pembuluh darah",
          weight: 2,
          category: "translucent",
        },
        {
          text: "Sayap berwarna-warni untuk menarik pasangan",
          weight: 2,
          category: "colorful",
        },
        { text: "Tidak memiliki sayap", weight: 0, category: "wingless" },
      ],
    },
    {
      id: "q2",
      text: "Bagaimana pola perilaku serangga dalam mencari makan?",
      options: [
        { text: "Berburu mangsa secara aktif", weight: 3, category: "predatory" },
        {
          text: "Mengumpulkan nektar atau serbuk sari",
          weight: 2,
          category: "pollinator",
        },
        {
          text: "Mencari bahan organik yang membusuk",
          weight: 1,
          category: "decomposer",
        },
        { text: "Hanya memakan tanaman", weight: 1, category: "herbivorous" },
      ],
    },
    {
      id: "q3",
      text: "Apa fungsi utama dari antena serangga ini?",
      options: [
        { text: "Untuk mendeteksi bau dan rasa", weight: 3, category: "sensing" },
        {
          text: "Untuk membantu keseimbangan saat terbang",
          weight: 2,
          category: "balancing",
        },
        {
          text: "Sebagai alat komunikasi antar serangga",
          weight: 2,
          category: "communication",
        },
        { text: "Tidak memiliki antena", weight: 0, category: "none" },
      ],
    },
    {
      id: "q4",
      text: "Apa habitat utama dari serangga ini?",
      options: [
        { text: "Hutan hujan atau pohon tua", weight: 3, category: "forest" },
        {
          text: "Dekat perairan seperti kolam atau sungai",
          weight: 2,
          category: "aquatic",
        },
        {
          text: "Padang rumput atau semak belukar",
          weight: 2,
          category: "grassland",
        },
        {
          text: "Tempat-tempat urban atau perkotaan",
          weight: 1,
          category: "urban",
        },
      ],
    },
    {
      id: "q5",
      text: "Apa jenis makanan yang dimakan serangga ini?",
      options: [
        {
          text: "Serangga kecil atau mangsa hidup",
          weight: 3,
          category: "carnivorous",
        },
        {
          text: "Nektar atau cairan tanaman",
          weight: 2,
          category: "nectarivore",
        },
        {
          text: "Kayu atau bahan organik mati",
          weight: 2,
          category: "detritivore",
        },
        {
          text: "Darah atau cairan tubuh makhluk lain",
          weight: 2,
          category: "hematophagous",
        },
      ],
    },
    {
      id: "q6",
      text: "Bagaimana cara serangga ini berkembang biak?",
      options: [
        {
          text: "Bertelur di air atau tempat lembab",
          weight: 3,
          category: "oviparous",
        },
        {
          text: "Menghasilkan larva atau belatung",
          weight: 2,
          category: "larviparous",
        },
        {
          text: "Melalui metamorfosis sempurna",
          weight: 2,
          category: "complete",
        },
        {
          text: "Melalui metamorfosis tidak sempurna",
          weight: 1,
          category: "incomplete",
        },
      ],
    },
    {
      id: "q7",
      text: "Apa peran utama serangga ini dalam ekosistem?",
      options: [
        {
          text: "Sebagai penyerbuk tanaman",
          weight: 3,
          category: "pollinator_role",
        },
        {
          text: "Sebagai predator untuk mengontrol populasi mangsa",
          weight: 3,
          category: "predator_role",
        },
        {
          text: "Sebagai pengurai bahan organik",
          weight: 2,
          category: "decomposer_role",
        },
        {
          text: "Sebagai mangsa dalam rantai makanan",
          weight: 1,
          category: "prey_role",
        },
      ],
    },
    {
      id: "q8",
      text: "Bagaimana mekanisme pertahanan serangga ini?",
      options: [
        {
          text: "Mengeluarkan bau atau cairan beracun",
          weight: 3,
          category: "chemical_defense"
        },
        {
          text: "Memiliki sengat atau rahang kuat",
          weight: 3,
          category: "physical_defense"
        },
        {
          text: "Kamuflase atau mimikri",
          weight: 2,
          category: "camouflage"
        },
        {
          text: "Berlari atau terbang cepat",
          weight: 1,
          category: "escape"
        }
      ]
    },
    {
      id: "q9",
      text: "Kapan serangga ini paling aktif?",
      options: [
        {
          text: "Aktif di malam hari",
          weight: 3,
          category: "nocturnal"
        },
        {
          text: "Aktif di siang hari",
          weight: 2,
          category: "diurnal"
        },
        {
          text: "Aktif saat fajar dan senja",
          weight: 2,
          category: "crepuscular"
        },
        {
          text: "Aktif sepanjang hari",
          weight: 1,
          category: "continuous"
        }
      ]
    },
    {
      id: "q10",
      text: "Apa ciri khas tubuh serangga ini?",
      options: [
        {
          text: "Memiliki capit atau tungkai yang dimodifikasi",
          weight: 3,
          category: "modified_limbs"
        },
        {
          text: "Tubuh beruas-ruas dengan warna mencolok",
          weight: 2,
          category: "segmented"
        },
        {
          text: "Tubuh pipih atau memanjang",
          weight: 2,
          category: "body_shape"
        },
        {
          text: "Memiliki cangkang atau perisai",
          weight: 2,
          category: "armored"
        }
      ]
    }
  ];