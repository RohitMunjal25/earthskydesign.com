import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";

const highlights = [
  { label: "Gallery drops", value: "Daily" },
  { label: "Image collections", value: "Public-first" },
  { label: "Visual stories", value: "Curated" },
];

const pillars = [
  {
    title: "Image-first experience",
    description:
      "Large media, calm metadata, and clean card rhythm keep visual discovery fast and immersive.",
  },
  {
    title: "Gallery-led discovery",
    description:
      "Every visual is organized for quick scanning so visitors can discover standout imagery without friction.",
  },
  {
    title: "Built for sharing",
    description:
      "From gallery highlights to profile links, the platform is tuned for social discovery and repeat visits.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is an image-led website focused on gallery publishing, image collections, and visual storytelling.`}
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/images">Open Gallery</Link>
          </Button>
          <Button asChild>
            <Link href="/images">Browse Collections</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">Visual Mission</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              A modern home for image publishing and visual storytelling.
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} is designed for visual-first browsing: discover image posts, explore curated
              collections, and move through a gallery experience that feels intentional on desktop and mobile.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-secondary/40 p-4">
                  <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {pillars.map((item) => (
            <Card key={item.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
