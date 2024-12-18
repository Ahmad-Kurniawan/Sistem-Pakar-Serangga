"use client";

import React, { useState } from "react";
import {
  Bug,
  Target,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InsectCharacteristic {
  id: number;
  name: string;
  scientificName: string;
  characteristics: string[];
  habitat: string;
  diet: string;
  uniqueFeatures: string[];
  imageUrl?: string;
  matchCategories: Record<string, string[]>; // New field to map specific characteristics
}

interface QuestionOption {
  text: string;
  weight: number;
  category: string;
}

interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

interface ExpertSystemResult {
  insect: InsectCharacteristic;
  matchPercentage: number;
  matchedCategories: string[];
}

const INSECTS: InsectCharacteristic[] = [
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

const QUESTIONS: Question[] = [
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
];
const InsectExpertSystem = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<ExpertSystemResult[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  const handleAnswerSelect = (questionId: string, category: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: category,
    }));
    setValidationError(null);
  };

  const findMatchingInsects = () => {
    const unansweredQuestions = QUESTIONS.filter(
      (question) => !answers[question.id]
    );

    if (unansweredQuestions.length > 0) {
      setValidationError(
        "Harap jawab semua pertanyaan sebelum mengidentifikasi serangga."
      );
      return;
    }

    const scoredInsects = INSECTS.map((insect) => {
      let matchedCategories: string[] = [];
      let matchScore = 0;

      Object.entries(answers).forEach(([questionId, selectedCategory]) => {
        const question = QUESTIONS.find((q) => q.id === questionId);
        const selectedOption = question?.options.find(
          (opt) => opt.category === selectedCategory
        );

        if (selectedOption) {
          const insectMatchingTraits =
            insect.matchCategories[selectedCategory] || [];

          if (insectMatchingTraits.length > 0) {
            matchedCategories.push(selectedCategory);
            matchScore += selectedOption.weight;
          }
        }
      });

      const matchPercentage = Math.round(
        (matchScore / (QUESTIONS.length * 3)) * 100
      );

      return {
        insect,
        matchPercentage,
        matchedCategories,
      };
    });

    const sortedResults = scoredInsects
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .filter((result) => result.matchPercentage > 20);

    setResults(sortedResults);
    setCurrentStep(QUESTIONS.length + 1);
  };

  const resetSystem = () => {
    setAnswers({});
    setResults([]);
    setCurrentStep(0);
    setValidationError(null);
  };

  const moveToNextStep = () => {
    if (currentStep < QUESTIONS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const moveToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderCurrentStep = () => {
    if (currentStep === 0) {
      return (
        <Card className="w-full">
          <CardHeader className="text-center">
            <Bug className="mx-auto text-primary w-16 h-16" />
            <CardTitle>Selamat Datang di Pengenal Serangga</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground">
              Sistem ini akan membantu Anda mengidentifikasi serangga
              berdasarkan karakteristiknya. Anda harus menjawab SEMUA pertanyaan
              untuk mendapatkan hasil identifikasi.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => setCurrentStep(1)}>
                Mulai Identifikasi <ChevronRight className="ml-2" />
              </Button>
              <Button variant="outline" onClick={() => setInfoDialogOpen(true)}>
                <Info className="mr-2" /> Cara Kerja
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (currentStep > 0 && currentStep <= QUESTIONS.length) {
      const currentQuestion = QUESTIONS[currentStep - 1];
      return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bug className="mr-3 text-primary" />
              <div className="line-clamp-2 break-words">
                {currentQuestion.text}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {validationError && (
              <div className="mb-4">
                <Badge variant="destructive" className="w-full justify-start">
                  <AlertCircle className="mr-2" /> {validationError}
                </Badge>
              </div>
            )}

            <Progress
              value={(currentStep / QUESTIONS.length) * 100}
              className="mb-4"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => (
                <TooltipProvider key={option.text}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={
                          answers[currentQuestion.id] === option.category
                            ? "default"
                            : "outline"
                        }
                        className="w-full justify-start h-full"
                        onClick={() => {
                          handleAnswerSelect(
                            currentQuestion.id,
                            option.category
                          );
                          moveToNextStep();
                        }}
                      >
                        <Target className="mr-2" />
                        <span className="line-clamp-2 break-words text-left">
                          {option.text}
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Klik untuk memilih jawaban ini</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            <div className="mt-4 flex justify-between">
              {currentStep > 1 && (
                <Button variant="outline" onClick={moveToPreviousStep}>
                  <ChevronLeft className="mr-2" /> Kembali
                </Button>
              )}

              {currentStep === QUESTIONS.length && (
                <Button onClick={findMatchingInsects} className="ml-auto">
                  <CheckCircle className="mr-2" /> Selesai
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      );
    }

    if (currentStep === QUESTIONS.length + 1 && results.length > 0) {
      return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">Hasil Identifikasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {results.map((result) => (
              <Card
                key={result.insect.id}
                className="flex flex-col md:flex-row"
              >
                {result.insect.imageUrl && (
                  <div className="w-full md:w-1/3">
                    <img
                      src={result.insect.imageUrl}
                      alt={result.insect.name}
                      className="w-full h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                  </div>
                )}
                <div className="p-4 w-full md:w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        {result.insect.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {result.insect.scientificName}
                      </p>
                    </div>
                    <Badge
                      variant={
                        result.matchPercentage > 80
                          ? "default"
                          : result.matchPercentage > 60
                          ? "secondary"
                          : result.matchPercentage > 40
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {result.matchPercentage}%
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Karakteristik:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {result.insect.characteristics.map((char, index) => (
                          <li key={index}>{char}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Detail:</h4>
                      <p>
                        <strong>Habitat:</strong> {result.insect.habitat}
                      </p>
                      <p>
                        <strong>Diet:</strong> {result.insect.diet}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Keunikan:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {result.insect.uniqueFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-center">
              <Button onClick={resetSystem}>
                <RefreshCw className="mr-2" /> Mulai Ulang
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
            <Bug className="text-primary" /> Pengenal Serangga
          </h1>
        </div>
        {renderCurrentStep()}
      </div>

      <Dialog open={infoDialogOpen} onOpenChange={setInfoDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cara Kerja Pengenal Serangga</DialogTitle>
            <DialogDescription>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Jawab semua pertanyaan tentang serangga yang Anda amati</li>
                <li>
                  Sistem akan mencocokkan jawaban Anda dengan database serangga
                </li>
                <li>
                  Hasil akan menunjukkan kemungkinan serangga dengan persentase
                  kecocokan
                </li>
                <li>Anda dapat memulai ulang proses kapan pun</li>
              </ol>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InsectExpertSystem;
