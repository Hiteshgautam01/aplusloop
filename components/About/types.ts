// types.ts

export interface SocialLinks {
    linkedin: string;
    twitter: string;
    email: string;
  }
  
  export interface TeamMember {
    name: string;
    position: string;
    bio: string;
    social: SocialLinks;
  }
  
  export interface CompanyValue {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  export interface CompanyInfo {
    founded: string;
    headquarters: string;
    teamSize: string;
    projectsCompleted: string;
  }