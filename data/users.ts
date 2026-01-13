import { User } from "@/types/user";

export const MOCK_USERS: User[] = [
  // Team Members
  { id: "1", name: "Ayamu", email: "ayamu@ayamulabs.com", role: "Artist", status: "Active", joinedDate: "Jan 01, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
  { id: "2", name: "Ayam Hamil", email: "ayamhamil@ayamulabs.com", role: "Artist", status: "Active", joinedDate: "Jan 01, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
  { id: "3", name: "Gin", email: "gin@ayamulabs.com", role: "Admin", status: "Active", joinedDate: "Jan 01, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
  { id: "4", name: "Kentung", email: "kentung@ayamulabs.com", role: "Artist", status: "Inactive", joinedDate: "Jan 01, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
  { id: "5", name: "Ipin", email: "ipin@ayamulabs.com", role: "Admin", status: "Active", joinedDate: "Jan 01, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ" },
  
  // Dummy Users
  { id: "6", name: "Alice Johnson", email: "alice@example.com", role: "Client", status: "Active", joinedDate: "Jan 10, 2026", avatar: "" },
  { id: "7", name: "Bob Smith", email: "bob@example.com", role: "Client", status: "Active", joinedDate: "Jan 08, 2026", avatar: "" },
  { id: "8", name: "Charlie Brown", email: "charlie@example.com", role: "Client", status: "Inactive", joinedDate: "Dec 20, 2025", avatar: "" },
  { id: "9", name: "Dave Wilson", email: "dave@example.com", role: "Client", status: "Active", joinedDate: "Jan 05, 2026", avatar: "" },
  { id: "10", name: "Eve Davis", email: "eve@example.com", role: "Artist", status: "Active", joinedDate: "Nov 15, 2025", avatar: "" },
  { id: "11", name: "Frank Miller", email: "frank@example.com", role: "Client", status: "Banned", joinedDate: "Oct 10, 2025", avatar: "" },
  { id: "12", name: "Grace Lee", email: "grace@example.com", role: "Client", status: "Active", joinedDate: "Jan 12, 2026", avatar: "" },
  { id: "13", name: "Hank Green", email: "hank@example.com", role: "Client", status: "Inactive", joinedDate: "Sep 01, 2025", avatar: "" },
  { id: "14", name: "Ivy Chen", email: "ivy@example.com", role: "Artist", status: "Active", joinedDate: "Dec 01, 2025", avatar: "" },
  { id: "15", name: "Jack Black", email: "jack@example.com", role: "Client", status: "Active", joinedDate: "Jan 11, 2026", avatar: "" },
  { id: "16", name: "Karen White", email: "karen@example.com", role: "Client", status: "Active", joinedDate: "Jan 02, 2026", avatar: "" },
  { id: "17", name: "Leo King", email: "leo@example.com", role: "Admin", status: "Active", joinedDate: "Aug 15, 2025", avatar: "" },
  { id: "18", name: "Mia Scott", email: "mia@example.com", role: "Client", status: "Inactive", joinedDate: "Jul 20, 2025", avatar: "" },
  { id: "19", name: "Noah Adams", email: "noah@example.com", role: "Client", status: "Active", joinedDate: "Jan 13, 2026", avatar: "" },
  { id: "20", name: "Olivia Jones", email: "olivia@example.com", role: "Artist", status: "Active", joinedDate: "Nov 05, 2025", avatar: "" },
];
