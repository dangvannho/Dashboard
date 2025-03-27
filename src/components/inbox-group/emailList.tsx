import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { Email } from "./email";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
interface EmailListProps {
  emails: Email[];
  selectedEmails: string[];
  onEmailSelect: (emailId: string) => void;
  onEmailCheck: (emailId: string, checked: boolean) => void;
  onStarToggle: (emailId: string) => void;
}

const EmailList = ({
  emails,
  selectedEmails,
  onEmailSelect,
  onEmailCheck,
  onStarToggle,
}: EmailListProps) => {
  const router = useRouter();
  //phan trang
  const [page, setPage] = useState(1);
  const emailsPerPage = 12;
  const totalPages = Math.ceil(emails.length / emailsPerPage);

  const displayedEmails = emails.slice(
    (page - 1) * emailsPerPage,
    page * emailsPerPage
  );
  //style label
  const getLabelStyles = (labelName: string) => {
    switch (labelName) {
      case "Primary":
        return { bg: "bg-green-100", text: "text-green-700" };
      case "Social":
        return { bg: "bg-blue-100", text: "text-blue-700" };
      case "Work":
        return { bg: "bg-orange-100", text: "text-orange-700" };
      case "Friends":
        return { bg: "bg-pink-100", text: "text-pink-700" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700" };
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white rounded-lg">
      <div className="flex-1 overflow-auto">
        <table className="min-w-full">
          <tbody>
            {displayedEmails.map((email) => (
              <tr
                key={email.id}
                className={cn(
                  "hover:bg-gray-50 cursor-pointer border-b",
                  !email.read && "bg-gray-50"
                )}
                onClick={() => {
                  onEmailSelect(email.id);
                  router.push(`/inbox/${email.id}`);
                }}
              >
                <td className="pl-4 py-3 w-10">
                  <Checkbox
                    checked={selectedEmails.includes(email.id)}
                    onCheckedChange={(checked) => {
                      onEmailCheck(email.id, checked as boolean);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-sm"
                  />
                </td>
                <td className="py-3 w-10 text-center">
                  <button
                    className={cn(
                      "text-gray-300 hover:text-yellow-400",
                      email.starred && "text-yellow-400"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      onStarToggle(email.id);
                    }}
                  >
                    <Star
                      className="h-4 w-4"
                      fill={email.starred ? "currentColor" : "none"}
                    />
                  </button>
                </td>

                <td className="py-3 w-48">
                  <div className="font-medium text-sm">{email.sender}</div>
                </td>

                <td className="py-3 w-24">
                  <span
                    className={cn(
                      "px-2 py-0.5 text-xs rounded-full",
                      getLabelStyles(email.label.name).bg,
                      getLabelStyles(email.label.name).text
                    )}
                  >
                    {email.label.name}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <div className="truncate text-sm">{email.subject}</div>
                </td>
                <td className="py-3 pr-4 text-right text-xs text-gray-500 w-24">
                  {email.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="p-3 border-t flex items-center justify-between text-xs text-gray-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          Showing {(page - 1) * emailsPerPage + 1}-
          {Math.min(page * emailsPerPage, emails.length)} of {emails.length}
        </div>
        <div className="flex items-center space-x-1">
          <button
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
