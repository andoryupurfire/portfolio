import { CvViewer, cvMetadata } from "@/components/cv-viewer";
import { site } from "@/data/config";

export const metadata = cvMetadata;

export default function CvPage() {
  return <CvViewer pdf={site.resume.en.pdf} lang="en" />;
}
