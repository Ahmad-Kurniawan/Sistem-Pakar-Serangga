import { InsectCharacteristic } from '../types';

export const INSECTS: InsectCharacteristic[] = [
    {
      id: 1,
      name: "Kupu-kupu",
      scientificName: "Danaus plexippus",
      characteristics: [
        "Sayap berwarna-warni untuk menarik pasangan dan kamuflase",
        "Tubuh ringan dan sayap besar untuk terbang anggun",
        "Belalai panjang untuk menghisap nektar",
        "Antenna berbentuk gada untuk keseimbangan dan penciuman",
      ],
      habitat: "Padang rumput, taman, kawasan berbunga",
      diet: "Nektar bunga",
      uniqueFeatures: [
        "Metamorfosis sempurna dengan 4 tahap",
        "Aktif di siang hari, sering terbang dari bunga ke bunga",
        "Anggun dalam gerakan",
      ],
      imageUrl: "/images/kupu-kupu.jpg",
      matchCategories: {
        elytra: [],
        translucent: [
          "Sayap berwarna-warni untuk menarik pasangan dan kamuflase",
        ],
        colorful: ["Sayap berwarna-warni untuk menarik pasangan dan kamuflase"],
        wingless: [],
        predatory: [],
        pollinator: [
          "Belalai panjang untuk menghisap nektar",
          "Aktif di siang hari, sering terbang dari bunga ke bunga",
        ],
        decomposer: [],
        herbivorous: [],
        sensing: ["Antenna berbentuk gada untuk keseimbangan dan penciuman"],
        balancing: ["Antenna berbentuk gada untuk keseimbangan dan penciuman"],
        communication: [],
        forest: [],
        aquatic: [],
        grassland: ["Padang rumput, taman, kawasan berbunga"],
        urban: [],
        carnivorous: [],
        nectarivore: ["Nektar bunga"],
        detritivore: [],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: ["Metamorfosis sempurna dengan 4 tahap"],
        incomplete: [],
        pollinator_role: ["Sering terbang dari bunga ke bunga"],
        predator_role: [],
        decomposer_role: [],
        prey_role: [],
      },
    },
    {
      id: 2,
      name: "Lebah",
      scientificName: "Apis mellifera",
      characteristics: [
        "Tubuh berbulu untuk mengumpulkan serbuk sari",
        "Kaki bercakar dengan kantong untuk membawa serbuk sari",
        "Antenna pendek untuk mendeteksi aroma bunga",
        "Memiliki sengat sebagai alat pertahanan",
      ],
      habitat: "Sarang di pohon atau kotak lebah",
      diet: "Nektar bunga, serbuk sari",
      uniqueFeatures: [
        "Koloni terstruktur dengan pembagian tugas",
        "Menghasilkan madu dan lilin",
        "Komunikasi kompleks melalui tarian",
      ],
      imageUrl: "/images/lebah.jpg",
      matchCategories: {
        elytra: [],
        translucent: [],
        colorful: [],
        wingless: [],
        predatory: [],
        pollinator: [
          "Kaki bercakar dengan kantong untuk membawa serbuk sari",
          "Antenna pendek untuk mendeteksi aroma bunga",
        ],
        decomposer: [],
        herbivorous: [],
        sensing: ["Antenna pendek untuk mendeteksi aroma bunga"],
        balancing: [],
        communication: ["Komunikasi kompleks melalui tarian"],
        forest: [],
        aquatic: [],
        grassland: ["Sarang di pohon atau kotak lebah"],
        urban: [],
        carnivorous: [],
        nectarivore: ["Nektar bunga, serbuk sari"],
        detritivore: [],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: [],
        incomplete: [],
        pollinator_role: ["Mengumpulkan serbuk sari dari bunga"],
        predator_role: [],
        decomposer_role: [],
        prey_role: [],
      },
    },
    {
      id: 3,
      name: "Semut",
      scientificName: "Formicidae",
      characteristics: [
        "Hidup dalam koloni besar dengan pembagian kerja",
        "Mandibula kuat untuk mengangkut makanan",
        "Antenna melengkung yang sensitif terhadap aroma",
        "Berkomunikasi dengan feromon",
      ],
      habitat: "Tanah, pohon, bangunan",
      diet: "Bahan organik, serangga kecil",
      uniqueFeatures: [
        "Dapat mengangkat benda lebih berat dari tubuhnya",
        "Berperan sebagai pengurai di ekosistem",
        "Hidup terorganisir dengan baik",
      ],
      imageUrl: "/images/semut.jpg",
      matchCategories: {
        elytra: [],
        translucent: [],
        colorful: [],
        wingless: [],
        predatory: ["Memakan serangga kecil"],
        pollinator: [],
        decomposer: ["Berperan sebagai pengurai di ekosistem"],
        herbivorous: [],
        sensing: ["Antenna melengkung yang sensitif terhadap aroma"],
        balancing: [],
        communication: ["Berkomunikasi dengan feromon"],
        forest: ["Hidup di pohon"],
        aquatic: [],
        grassland: ["Hidup di tanah"],
        urban: ["Bisa hidup di bangunan"],
        carnivorous: ["Memakan serangga kecil"],
        nectarivore: [],
        detritivore: ["Memakan bahan organik"],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: [],
        incomplete: [],
        pollinator_role: [],
        predator_role: ["Mengontrol populasi serangga kecil"],
        decomposer_role: ["Mengurai bahan organik"],
        prey_role: [],
      },
    },
    {
      id: 4,
      name: "Capung",
      scientificName: "Odonata",
      characteristics: [
        "Sayap panjang dan transparan dengan pembuluh darah terlihat",
        "Mata besar untuk mendeteksi gerakan mangsa",
        "Tubuh ramping dan memanjang",
        "Predator yang sangat aktif",
      ],
      habitat: "Dekat air tawar",
      diet: "Serangga kecil, nyamuk",
      uniqueFeatures: [
        "Nimfa hidup di air",
        "Metamorfosis tidak sempurna",
        "Mampu terbang dengan akurasi tinggi",
      ],
      imageUrl: "/images/capung.jpg",
      matchCategories: {
        elytra: [],
        translucent: [
          "Sayap panjang dan transparan dengan pembuluh darah terlihat",
        ],
        colorful: [],
        wingless: [],
        predatory: [
          "Predator yang sangat aktif",
          "Memangsa serangga kecil dan nyamuk",
        ],
        pollinator: [],
        decomposer: [],
        herbivorous: [],
        sensing: ["Mata besar untuk mendeteksi gerakan mangsa"],
        balancing: [],
        communication: [],
        forest: [],
        aquatic: ["Nimfa hidup di air", "Dekat air tawar"],
        grassland: [],
        urban: [],
        carnivorous: ["Memakan serangga kecil"],
        nectarivore: [],
        detritivore: [],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: [],
        incomplete: ["Metamorfosis tidak sempurna"],
        pollinator_role: [],
        predator_role: ["Mengontrol populasi serangga kecil"],
        decomposer_role: [],
        prey_role: [],
      },
    },
    {
      id: 5,
      name: "Belalang",
      scientificName: "Orthoptera",
      characteristics: [
        "Kaki belakang besar untuk melompat jauh",
        "Tubuh berwarna hijau atau coklat untuk kamuflase",
        "Mulut pengunyah yang kuat untuk makan dedaunan",
        "Antenna panjang untuk merasakan lingkungan",
      ],
      habitat: "Rerumputan, ladang, kebun",
      diet: "Daun, batang tanaman",
      uniqueFeatures: [
        "Metamorfosis tidak sempurna",
        "Menghasilkan suara dengan menggesekkan sayap atau kaki",
        "Kemampuan melompat luar biasa",
      ],
      imageUrl: "/images/belalang.jpg",
      matchCategories: {
        elytra: [],
        translucent: [],
        colorful: [],
        wingless: [],
        predatory: [],
        pollinator: [],
        decomposer: [],
        herbivorous: ["Memakan daun dan batang tanaman"],
        sensing: ["Antenna panjang untuk merasakan lingkungan"],
        balancing: [],
        communication: ["Menghasilkan suara dengan menggesekkan sayap atau kaki"],
        forest: [],
        aquatic: [],
        grassland: ["Hidup di rerumputan, ladang"],
        urban: [],
        carnivorous: [],
        nectarivore: [],
        detritivore: [],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: [],
        incomplete: ["Metamorfosis tidak sempurna"],
        pollinator_role: [],
        predator_role: [],
        decomposer_role: [],
        prey_role: ["Menjadi mangsa bagi predator lain"],
      },
    },
    {
      id: 6,
      name: "Kumbang",
      scientificName: "Coleoptera",
      characteristics: [
        "Sayap keras (elytra) untuk melindungi sayap dalam",
        "Tubuh keras dengan berbagai warna dan pola",
        "Antenna pendek dengan berbagai bentuk",
        "Memiliki mulut pengunyah yang kuat",
      ],
      habitat: "Hutan, ladang, kayu busuk",
      diet: "Beragam, tergantung spesies: tanaman, kayu, bangkai, atau serangga lain",
      uniqueFeatures: [
        "Metamorfosis sempurna",
        "Peran sebagai pengurai di alam",
        "Beberapa spesies berwarna cerah sebagai peringatan predator",
      ],
      imageUrl: "/images/kumbang.jpg",
      matchCategories: {
        elytra: ["Sayap keras (elytra) untuk melindungi sayap dalam"],
        translucent: [],
        colorful: ["Tubuh keras dengan berbagai warna dan pola"],
        wingless: [],
        predatory: ["Memakan serangga lain"],
        pollinator: [],
        decomposer: ["Peran sebagai pengurai di alam"],
        herbivorous: ["Memakan tanaman"],
        sensing: ["Antenna pendek dengan berbagai bentuk"],
        balancing: [],
        communication: [],
        forest: ["Hidup di hutan dan kayu busuk"],
        aquatic: [],
        grassland: ["Hidup di ladang"],
        urban: [],
        carnivorous: ["Memakan serangga lain"],
        nectarivore: [],
        detritivore: ["Memakan bangkai"],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: ["Metamorfosis sempurna"],
        incomplete: [],
        pollinator_role: [],
        predator_role: ["Mengontrol populasi serangga"],
        decomposer_role: ["Mengurai bahan organik"],
        prey_role: [],
      },
    },
    {
      id: 7,
      name: "Nyamuk",
      scientificName: "Culicidae",
      characteristics: [
        "Proboscis panjang untuk menghisap darah",
        "Tubuh ramping dengan sayap kecil bersisik",
        "Mata besar untuk mendeteksi gerakan",
        "Berkembang biak di air",
      ],
      habitat: "Dekat air, tempat lembab",
      diet: "Darah (betina), nektar",
      uniqueFeatures: [
        "Metamorfosis lengkap",
        "Vektor penyakit berbahaya seperti malaria dan demam berdarah",
        "Betina membutuhkan darah untuk bertelur",
      ],
      imageUrl: "/images/nyamuk.jpg",
      matchCategories: {
        elytra: [],
        translucent: [],
        colorful: [],
        wingless: [],
        predatory: [],
        pollinator: [],
        decomposer: [],
        herbivorous: [],
        sensing: ["Mata besar untuk mendeteksi gerakan"],
        balancing: [],
        communication: [],
        forest: [],
        aquatic: ["Berkembang biak di air", "Hidup di tempat lembab"],
        grassland: [],
        urban: [],
        carnivorous: [],
        nectarivore: ["Meminum nektar"],
        detritivore: [],
        hematophagous: ["Proboscis panjang untuk menghisap darah"],
        oviparous: ["Bertelur di air"],
        larviparous: [],
        complete: ["Metamorfosis lengkap"],
        incomplete: [],
        pollinator_role: [],
        predator_role: [],
        decomposer_role: [],
        prey_role: ["Menjadi makanan predator lain"],
      },
    },
    {
      id: 8,
      name: "Rayap",
      scientificName: "Isoptera",
      characteristics: [
        "Tubuh lunak berwarna pucat",
        "Rahang kuat untuk menggigit kayu",
        "Hidup dalam koloni besar",
        "Berperan sebagai pengurai kayu",
      ],
      habitat: "Kayu, tanah",
      diet: "Bahan yang mengandung selulosa: kayu, kertas",
      uniqueFeatures: [
        "Metamorfosis tidak sempurna",
        "Merusak bangunan kayu",
        "Struktur sosial kompleks dalam koloni",
      ],
      imageUrl: "/images/rayap.jpg",
      matchCategories: {
        elytra: [],
        translucent: [],
        colorful: [],
        wingless: [],
        predatory: [],
        pollinator: [],
        decomposer: ["Berperan sebagai pengurai kayu"],
        herbivorous: [],
        sensing: [],
        balancing: [],
        communication: ["Struktur sosial kompleks dalam koloni"],
        forest: ["Hidup di kayu"],
        aquatic: [],
        grassland: [],
        urban: ["Merusak bangunan kayu"],
        carnivorous: [],
        nectarivore: [],
        detritivore: ["Memakan bahan organik dari kayu dan selulosa"],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: [],
        incomplete: ["Metamorfosis tidak sempurna"],
        pollinator_role: [],
        predator_role: [],
        decomposer_role: ["Mengurai kayu dan bahan organik"],
        prey_role: ["Menjadi makanan untuk burung, kadal, dan predator lainnya"],
      },
    },
    {
      id: 9,
      name: "Kunang-Kunang",
      scientificName: "Lampyridae",
      characteristics: [
        "Memiliki organ bercahaya di bagian bawah abdomen",
        "Tubuh berwarna hitam atau cokelat dengan bintik kuning",
        "Ukuran kecil hingga sedang dengan sayap lunak",
        "Sayap dalam digunakan untuk terbang, dilindungi oleh elytra",
      ],
      habitat: "Daerah berumput, hutan, dan dekat perairan",
      diet: "Larva memakan siput, dewasa biasanya tidak makan",
      uniqueFeatures: [
        "Kemampuan menghasilkan cahaya bioluminesensi",
        "Cahaya digunakan untuk komunikasi dan menarik pasangan",
        "Aktif saat senja atau malam hari",
      ],
      imageUrl: "/images/kunang-kunang.jpg",
      matchCategories: {
        elytra: ["Sayap lunak dilindungi oleh elytra"],
        translucent: ["Menghasilkan cahaya bioluminesensi"],
        colorful: ["Cahaya berwarna hijau kekuningan"],
        wingless: [],
        predatory: ["Larva memangsa siput"],
        pollinator: [],
        decomposer: [],
        herbivorous: [],
        sensing: [],
        balancing: [],
        communication: ["Cahaya digunakan untuk menarik pasangan"],
        forest: ["Hidup di hutan"],
        aquatic: [],
        grassland: ["Hidup di daerah berumput"],
        urban: [],
        carnivorous: ["Larva memangsa siput"],
        nectarivore: [],
        detritivore: [],
        hematophagous: [],
        oviparous: [],
        larviparous: [],
        complete: ["Metamorfosis sempurna"],
        incomplete: [],
        pollinator_role: [],
        predator_role: ["Mengontrol populasi siput"],
        decomposer_role: [],
        prey_role: [],
      },
    },
    {
      id: 10,
      name: "Kecoa",
      scientificName: "Blattodea",
      characteristics: [
        "Tubuh pipih dan oval dengan warna cokelat atau hitam",
        "Antenna panjang untuk mendeteksi makanan dan bahaya",
        "Sayap pada beberapa spesies digunakan untuk terbang",
        "Kaki berduri untuk bergerak cepat",
      ],
      habitat: "Lingkungan urban, hutan, atau tempat lembap",
      diet: "Makanan sisa, serasah, bahan organik",
      uniqueFeatures: [
        "Kemampuan bertahan di berbagai kondisi lingkungan",
        "Memiliki sistem saraf yang sangat tahan banting",
        "Aktif pada malam hari (nokturnal)",
      ],
      imageUrl: "/images/kecoa.jpg",
      matchCategories: {
        elytra: ["Beberapa spesies memiliki sayap keras"],
        translucent: [],
        colorful: [],
        wingless: [],
        predatory: [],
        pollinator: [],
        decomposer: ["Memakan bahan organik dan serasah"],
        herbivorous: [],
        sensing: ["Antenna panjang untuk mendeteksi makanan"],
        balancing: [],
        communication: [],
        forest: ["Hidup di hutan"],
        aquatic: [],
        grassland: [],
        urban: ["Hidup di lingkungan urban"],
        carnivorous: [],
        nectarivore: [],
        detritivore: ["Memakan bahan organik dan serasah"],
        hematophagous: [],
        oviparous: ["Bertelur dalam ootheca"],
        larviparous: [],
        complete: [],
        incomplete: ["Metamorfosis tidak sempurna"],
        pollinator_role: [],
        predator_role: [],
        decomposer_role: ["Mengurai bahan organik"],
        prey_role: [],
      },
    },
  ].map((insect) => ({
    ...insect,
    matchCategories: insect.matchCategories || {},
  }));