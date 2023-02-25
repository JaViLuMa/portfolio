export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      aboutMe: {
        Row: {
          description: string;
          id: string;
        };
        Insert: {
          description?: string;
          id?: string;
        };
        Update: {
          description?: string;
          id?: string;
        };
      };
      contactMe: {
        Row: {
          external: boolean;
          href: string;
          id: string;
          label: string;
          value: string;
        };
        Insert: {
          external?: boolean;
          href?: string;
          id?: string;
          label?: string;
          value?: string;
        };
        Update: {
          external?: boolean;
          href?: string;
          id?: string;
          label?: string;
          value?: string;
        };
      };
      cv: {
        Row: {
          id: string;
          link: string;
        };
        Insert: {
          id?: string;
          link?: string;
        };
        Update: {
          id?: string;
          link?: string;
        };
      };
      experience: {
        Row: {
          id: string;
          text: string;
        };
        Insert: {
          id?: string;
          text?: string;
        };
        Update: {
          id?: string;
          text?: string;
        };
      };
      me: {
        Row: {
          alt: string;
          description: string;
          id: string;
          src: string;
          title: string;
        };
        Insert: {
          alt?: string;
          description?: string;
          id?: string;
          src?: string;
          title?: string;
        };
        Update: {
          alt?: string;
          description?: string;
          id?: string;
          src?: string;
          title?: string;
        };
      };
      projects: {
        Row: {
          description: string;
          external: boolean;
          id: string;
          link: string;
          title: string;
        };
        Insert: {
          description?: string;
          external: boolean;
          id?: string;
          link?: string;
          title?: string;
        };
        Update: {
          description?: string;
          external?: boolean;
          id?: string;
          link?: string;
          title?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
