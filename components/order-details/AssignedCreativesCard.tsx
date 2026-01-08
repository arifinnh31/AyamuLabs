import Image from "next/image";

export default function AssignedCreativesCard() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
      <h2 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
        <span className="material-icons-round text-primary">group</span>
        Assigned Creatives
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex -space-x-2">
          <Image
            alt="Artist Avatar"
            className="w-10 h-10 rounded-full border-2 border-surface-light dark:border-surface-dark ring-2 ring-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7PU6LS5-FvvS7-1rKOwvWnQicKPkvF_aZmWRqcVB5QtC9duxsMoclpFVYDmPXPm8NEqNQ5JRWvLi1oHa3ogoxkNb-zTUTrbggwSEm87GoEt_77ADp39ld_ZTfodlIpLLrbJdRcqD25lMK8pCgPGxBw3hArcHAJgWfapfdu6KsMb8tvftbwzF-lSc91OmZHWVoTpzSat1hTL7vyXzaoNG_KoRqU01dNXp2vNiePt9eIGLDShxReM86Qv-tfKV_OzVaUWCE0_hhbw"
            width={40}
            height={40}
          />
          <Image
            alt="Artist Avatar"
            className="w-10 h-10 rounded-full border-2 border-surface-light dark:border-surface-dark ring-2 ring-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApXAcNGBqZ-Hv6Pi-C4lXpNPYv3ZaXr5adJs3ELddG75uu1vrzhOmkzjbTKGRcBjOnTlkFM9JN3W1BzxBql6xlAKIT5DdpjTGIJoSZchTh0JkMuQrDeqEpoQXscKZAx8NFsdcejhLS8ALdjD4MpD7Uv6AE1BxXQAjrQbobqp2mxCFv4onKJjOQU-rxdO2eBGdowW4u7_CIDJBRK4ZpuoYes1QBgdWeNwrqAQGLWe_688QBVRnfMPa7tAP0uCPGKAF3meK9UZw0NA"
            width={40}
            height={40}
          />
          <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-surface-light dark:border-surface-dark flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors cursor-pointer">
            <span className="material-icons-round text-lg">add</span>
          </button>
        </div>
        <div className="flex gap-3">
          <button className="text-sm text-primary font-medium hover:underline cursor-pointer">
            Manage Team
          </button>
        </div>
      </div>
    </div>
  );
}
