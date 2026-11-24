import { CvViewer, cvMetadata } from "@/components/cv-viewer";
import { site } from "@/data/config";

export const metadata = cvMetadata;

export default function CvPageEs() {
  return <CvViewer pdf={site.resume.es.pdf} lang="es" />;
}
