"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import TeamStats from "@/components/team/TeamStats";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import InviteMemberModal from "@/components/team/InviteMemberModal";
import ConfirmationModal from "@/components/ui/ConfirmationModal";
import { UserRole } from "@/types/user";

export default function TeamPage() {
  const [members, setMembers] = useState([
    { name: "Ayamu", role: "Artist", email: "ayamu@ayamulabs.com", status: "online", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
    { name: "Ayam Hamil", role: "Artist", email: "ayamhamil@ayamulabs.com", status: "online", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
    { name: "Gin", role: "Admin", email: "gin@ayamulabs.com", status: "busy", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
    { name: "Kentung", role: "Artist", email: "kentung@ayamulabs.com", status: "offline", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
    { name: "Ipin", role: "Admin", email: "ipin@ayamulabs.com", status: "online", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
  ]);

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState<string | null>(null);

  const handleInvite = (email: string, role: UserRole) => {
    // Mock adding a member - in real app would call API
    setMembers([
        {
            name: email.split("@")[0], // Mock name from email
            role: role,
            email: email,
            status: "offline", // Default status
            avatar: "" // No avatar initially
        },
        ...members
    ]);
  };

  const handleRemove = () => {
    if (memberToRemove) {
        setMembers(members.filter(m => m.name !== memberToRemove));
        setMemberToRemove(null);
    }
  };

  return (
    <div className="space-y-6 p-4 md:px-8 md:pb-8 md:pt-1">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage team members.
          </p>
        </div>
        <Button className="gap-2" onClick={() => setIsInviteModalOpen(true)}>
          <span className="material-icons-round text-lg">add</span>
          Invite Member
        </Button>
      </div>

      <TeamStats />

      <div>
        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 px-1">All Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {members.map((member, idx) => (
                <TeamMemberCard 
                  key={idx} 
                  member={member} 
                  onEdit={() => alert(`Edit role for ${member.name}`)}
                  onRemove={() => {
                      setMemberToRemove(member.name);
                      setIsDeleteModalOpen(true);
                  }}
                />
            ))}
        </div>
      </div>

      <InviteMemberModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        onInvite={handleInvite}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleRemove}
        title="Remove Team Member"
        description={`Are you sure you want to remove ${memberToRemove} from the team?`}
        confirmLabel="Remove"
        isDanger
      />
    </div>
  );
}
