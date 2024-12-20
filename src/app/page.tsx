"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Bug,
  Target,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { INSECTS } from "../data/insects";
import { QUESTIONS } from "../data/question";
import { ExpertSystemResult } from "../types";
import HowItWorksModal from "./HowItWorksModal";

const InsectExpertSystem = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<ExpertSystemResult[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDirectSearch, setShowDirectSearch] = useState(false);

  const handleAnswerSelect = (questionId: string, category: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: category,
    }));
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

  const searchInsects = (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const matchingInsects = INSECTS.map((insect) => {
      let matchScore = 0;
      const matchedCategories = new Set<string>();

      // Helper function to check and score matches
      const checkMatch = (text: string, weight: number, category: string) => {
        if (text.toLowerCase().includes(query.toLowerCase())) {
          matchScore += weight;
          matchedCategories.add(category);
        }
      };

      // Check name matches (highest priority)
      checkMatch(insect.name, 5, "name");
      checkMatch(insect.scientificName, 4, "scientific");

      // Check characteristics
      insect.characteristics.forEach((char) => {
        checkMatch(char, 3, "characteristics");
      });

      // Check unique features
      insect.uniqueFeatures.forEach((feature) => {
        checkMatch(feature, 3, "uniqueFeatures");
      });

      // Check habitat
      checkMatch(insect.habitat, 2, "habitat");

      // Check diet
      checkMatch(insect.diet, 2, "diet");

      // Check all match categories
      Object.entries(insect.matchCategories).forEach(([category, items]) => {
        items.forEach((item) => {
          checkMatch(item, 2, category);
        });
      });

      const matchPercentage = Math.min(
        Math.round((matchScore / 20) * 100),
        100
      );

      return {
        insect,
        matchPercentage,
        matchedCategories: Array.from(matchedCategories),
      };
    }).filter((result) => result.matchPercentage > 0);

    setResults(
      matchingInsects.sort((a, b) => b.matchPercentage - a.matchPercentage)
    );
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
      const matchedCategories: string[] = [];
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
    setSearchQuery("");
    setShowDirectSearch(false);
  };

  const renderWelcomeScreen = () => (
    <Card className="w-full">
      <CardHeader className="text-center">
        <Bug className="mx-auto text-primary w-16 h-16" />
        <CardTitle>Selamat Datang di Sistem Pakar Serangga</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-muted-foreground">
          Pilih metode identifikasi serangga yang Anda inginkan:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => setCurrentStep(1)}>
            Identifikasi dengan Pertanyaan <ChevronRight className="ml-2" />
          </Button>
          <Button variant="secondary" onClick={() => setShowDirectSearch(true)}>
            <Search className="mr-2" /> Cari Berdasarkan Ciri-ciri
          </Button>
          <Button variant="outline" onClick={() => setInfoDialogOpen(true)}>
            <Info className="mr-2" /> Cara Kerja
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderSearchInterface = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Bug className="mr-3 text-primary" />
            Pencarian Serangga
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-8"
              placeholder="Cari berdasarkan nama, ciri-ciri, habitat, makanan, atau keunikan"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                searchInsects(e.target.value);
              }}
            />
          </div>
          <Button variant="outline" onClick={resetSystem}>
            <RefreshCw className="mr-2" /> Reset
          </Button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((result) => (
              <Card
                key={result.insect.id}
                className="flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/3 relative">
                  <Image
                    src={result.insect.imageUrl ?? "/default-image.jpg"} // provide a default image URL
                    alt={result.insect.name}
                    width={400}
                    height={300}
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  />
                </div>
                <div className="p-4 w-full md:w-2/3">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-xl font-bold">
                        {result.insect.name}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">
                        {result.insect.scientificName}
                      </p>
                    </div>
                    <Badge
                      variant={
                        result.matchPercentage > 80
                          ? "default"
                          : result.matchPercentage > 60
                          ? "secondary"
                          : "outline"
                      }
                    >
                      Kecocokan {result.matchPercentage}%
                    </Badge>
                  </div>

                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {result.matchedCategories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="text-xs"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
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
                      <p className="text-sm">
                        <strong>Habitat:</strong> {result.insect.habitat}
                      </p>
                      <p className="text-sm">
                        <strong>Makanan:</strong> {result.insect.diet}
                      </p>
                      <h4 className="font-semibold mt-4 mb-2">Keunikan:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {result.insect.uniqueFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderQuestionStep = () => {
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
                        handleAnswerSelect(currentQuestion.id, option.category);
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
  };

  const renderResults = () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Hasil Identifikasi</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {results.map((result) => (
          <Card key={result.insect.id} className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 relative">
              <Image
                src={result.insect.imageUrl ?? "/default-image.jpg"} // provide a default image URL
                alt={result.insect.name}
                width={400}
                height={300}
                className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              />
            </div>
            <div className="p-4 w-full md:w-2/3">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-xl font-bold">{result.insect.name}</h3>
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
                      : "outline"
                  }
                >
                  Kecocokan {result.matchPercentage}%
                </Badge>
              </div>

              <div className="mt-2">
                <div className="flex flex-wrap gap-1">
                  {result.matchedCategories.map((category) => (
                    <Badge key={category} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
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
                  <p className="text-sm">
                    <strong>Habitat:</strong> {result.insect.habitat}
                  </p>
                  <p className="text-sm">
                    <strong>Makanan:</strong> {result.insect.diet}
                  </p>
                  <h4 className="font-semibold mt-4 mb-2">Keunikan:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {result.insect.uniqueFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
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

  const renderCurrentStep = () => {
    if (currentStep === 0) {
      return renderWelcomeScreen();
    }

    if (showDirectSearch) {
      return renderSearchInterface();
    }

    if (currentStep > 0 && currentStep <= QUESTIONS.length) {
      return renderQuestionStep();
    }

    if (currentStep === QUESTIONS.length + 1 && results.length > 0) {
      return renderResults();
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
            <Bug className="text-primary" /> Sistem Pakar Serangga
          </h1>
        </div>
        {renderCurrentStep()}
      </div>
      <HowItWorksModal open={infoDialogOpen} onOpenChange={setInfoDialogOpen} />
    </div>
  );
};

export default InsectExpertSystem;
