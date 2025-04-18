export interface Project {
    id: string;
    projectName: string;
    location: string;
    tier: string;
    area: number;
    totalCost: number;
    costPerSqft: number;
    createdAt: string;
  }
  
  export interface ProjectFormData {
    projectName: string;
    location: string;
    area: string;
    tier: string;
  }