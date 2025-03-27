export interface Email {
  id: string;
  subject: string;
  sender: string;
  preview: string;
  timestamp: string;
  read: boolean;
  starred: boolean;
  folder?: string;
  label: {
    name: string;
    color: string;
  };
  messages?: {
    content: string;
    timestamp: string;
    isHighlighted: boolean;
  }[];
}
