// src/types/index.ts

export interface InsectCharacteristic {
    id: number;
    name: string;
    scientificName: string;
    characteristics: string[];
    habitat: string;
    diet: string;
    uniqueFeatures: string[];
    imageUrl?: string;
    matchCategories: Record<string, string[]>;
  }
  
  export interface QuestionOption {
    text: string;
    weight: number;
    category: string;
  }
  
  export interface Question {
    id: string;
    text: string;
    options: QuestionOption[];
  }
  
  export interface ExpertSystemResult {
    insect: InsectCharacteristic;
    matchPercentage: number;
    matchedCategories: string[];
  }