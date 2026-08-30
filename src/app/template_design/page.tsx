"use client";

import { useState } from "react";

type PreviewData = {
  title: string;
  category: string;
  className: string;
  description: string;
  previewType:
    | "text"
    | "color"
    | "button"
    | "badge"
    | "card"
    | "radius"
    | "shadow"
    | "form"
    | "layout";
};

export default function DesignSystemPage() {
  const [selectedPreview, setSelectedPreview] = useState<PreviewData | null>(
    null
  );

  const colors = [
    {
      name: "Primary Navy",
      className: "bg-primary-navy",
      textClass: "text-inverse",
      hex: "#0B2E59",
    },
    {
      name: "Secondary Blue",
      className: "bg-secondary-blue",
      textClass: "text-inverse",
      hex: "#163F73",
    },
    {
      name: "Accent Gold",
      className: "bg-accent-gold",
      textClass: "text-primary-navy",
      hex: "#D4A63A",
    },
    {
      name: "Support Gold Light",
      className: "bg-support-gold-light",
      textClass: "text-primary-navy",
      hex: "#E7C76A",
    },
    {
      name: "Support Green",
      className: "bg-support-green",
      textClass: "text-inverse",
      hex: "#2D7A46",
    },
    {
      name: "Background",
      className: "bg-app",
      textClass: "text-primary-navy",
      hex: "#F8FAFC",
    },
    {
      name: "Surface",
      className: "bg-surface",
      textClass: "text-primary-navy",
      hex: "#FFFFFF",
    },
    {
      name: "Border",
      className: "bg-border",
      textClass: "text-primary-navy",
      hex: "#D9E2EC",
    },
  ];

  const fontSizes = [
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "48",
    "56",
    "64",
  ];

  const radiusList = [
    "rounded-xs",
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-full",
  ];

  const shadowList = ["shadow-sm", "shadow-md", "shadow-card", "shadow-lg"];

  function openPreview(data: PreviewData) {
    setSelectedPreview(data);
  }

  return (
    <main className="bg-app">
      <section className="hero">
        <div className="container-page">
          <p className="section-label">Design System Preview</p>

          <h1 className="hero-title">
            Dokumentasi Visual CSS Website Kanwil Ditjenpas Kaltim
          </h1>

          <p className="hero-description">
            Klik setiap component untuk melihat preview detail dan contoh
            penggunaannya.
          </p>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">01. Typography</p>
            <h2 className="page-title">Font Size & Font Weight</h2>
            <p className="page-description">
              Klik salah satu typography untuk melihat preview.
            </p>
          </div>

          <div className="card">
            <div className="flex flex-col gap-8">
              {["regular", "medium", "semiBold", "bold"].map((weight) => (
                <div key={weight}>
                  <h3 className="text-bold text-24 text-primary-navy mb-4">
                    {weight}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {fontSizes.map((size) => {
                      const className = `text-${weight} text-${size}`;

                      return (
                        <button
                          key={`${weight}-${size}`}
                          type="button"
                          onClick={() =>
                            openPreview({
                              title: `${weight} ${size}px`,
                              category: "Typography",
                              className,
                              description:
                                "Utility typography untuk mengatur font weight, font size, dan line height.",
                              previewType: "text",
                            })
                          }
                          className="card-hover rounded-md border border-brand bg-surface p-4 text-left"
                        >
                          <p
                            className={`${className} text-primary-navy`}
                          >{`.${className} — Contoh Typography`}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">02. Colors</p>
            <h2 className="page-title">Brand Color Palette</h2>
            <p className="page-description">
              Klik warna untuk melihat preview.
            </p>
          </div>

          <div className="grid-auto">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() =>
                  openPreview({
                    title: color.name,
                    category: "Color",
                    className: color.className,
                    description: `Kode warna ${color.hex}. Digunakan sebagai brand color website.`,
                    previewType: "color",
                  })
                }
                className="card card-hover text-left"
              >
                <div
                  className={`${color.className} ${color.textClass} rounded-lg flex-center`}
                  style={{ height: "140px" }}
                >
                  <span className="text-bold text-16">{color.hex}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-bold text-18 text-primary-navy">
                    {color.name}
                  </h3>
                  <p className="text-regular text-14 text-muted mt-1">
                    .{color.className}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BUTTONS */}
      <section className="section bg-primary-navy">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">03. Buttons</p>
            <h2 className="text-bold text-48 text-inverse tracking-tight">
              Button Components
            </h2>
            <p className="mt-4 text-regular text-16 text-inverse">
              Klik button untuk melihat preview.
            </p>
          </div>

          <div className="card">
            <div className="flex flex-wrap gap-4">
              {[
                "btn btn-primary",
                "btn btn-secondary",
                "btn btn-dark",
                "btn btn-outline-light",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    openPreview({
                      title: item,
                      category: "Button",
                      className: item,
                      description:
                        "Component button reusable untuk CTA, navigasi, dan action.",
                      previewType: "button",
                    })
                  }
                  className={
                    item === "btn btn-outline-light"
                      ? "btn btn-dark"
                      : item
                  }
                >
                  .{item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">04. Badges</p>
            <h2 className="page-title">Badge Components</h2>
            <p className="page-description">
              Klik badge untuk melihat preview.
            </p>
          </div>

          <div className="card">
            <div className="flex flex-wrap gap-4">
              {["badge badge-gold", "badge badge-blue", "badge badge-green"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      openPreview({
                        title: item,
                        category: "Badge",
                        className: item,
                        description:
                          "Badge cocok untuk kategori berita, pengumuman, layanan, dan status.",
                        previewType: "badge",
                      })
                    }
                    className={item}
                  >
                    .{item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">05. Cards</p>
            <h2 className="page-title">Card Components</h2>
            <p className="page-description">
              Klik card untuk melihat preview.
            </p>
          </div>

          <div className="grid-auto">
            {["card", "card card-hover", "card shadow-card"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  openPreview({
                    title: item,
                    category: "Card",
                    className: item,
                    description:
                      "Card digunakan untuk berita, pengumuman, layanan, galeri, dan konten informasi.",
                    previewType: "card",
                  })
                }
                className={`${item} text-left`}
              >
                <span className="badge badge-blue">Preview</span>

                <h3 className="mt-4 text-bold text-24 text-primary-navy">
                  .{item}
                </h3>

                <p className="mt-3 text-regular text-14 text-muted">
                  Klik card ini untuk melihat detail preview component.
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">06. Layout</p>
            <h2 className="page-title">Layout Utilities</h2>
            <p className="page-description">
              Klik layout utility untuk melihat preview.
            </p>
          </div>

          <div className="grid-auto">
            {["container-page", "section", "flex-center", "flex-between", "grid-auto"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    openPreview({
                      title: item,
                      category: "Layout",
                      className: item,
                      description:
                        "Layout utility untuk mengatur struktur halaman dan posisi elemen.",
                      previewType: "layout",
                    })
                  }
                  className="card card-hover text-left"
                >
                  <h3 className="text-bold text-24 text-primary-navy">
                    .{item}
                  </h3>
                  <p className="mt-3 text-regular text-14 text-muted">
                    Utility layout untuk kebutuhan struktur halaman.
                  </p>
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* RADIUS */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">07. Radius</p>
            <h2 className="page-title">Border Radius Utilities</h2>
            <p className="page-description">
              Klik radius untuk melihat preview.
            </p>
          </div>

          <div className="grid-auto">
            {radiusList.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  openPreview({
                    title: item,
                    category: "Radius",
                    className: item,
                    description:
                      "Radius utility untuk mengatur lengkungan sudut elemen.",
                    previewType: "radius",
                  })
                }
                className="card text-left"
              >
                <div
                  className={`${item} bg-primary-navy flex-center`}
                  style={{ height: "120px" }}
                >
                  <span className="text-bold text-16 text-inverse">
                    .{item}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SHADOW */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">08. Shadow</p>
            <h2 className="page-title">Shadow Utilities</h2>
            <p className="page-description">
              Klik shadow untuk melihat preview.
            </p>
          </div>

          <div className="grid-auto">
            {shadowList.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  openPreview({
                    title: item,
                    category: "Shadow",
                    className: item,
                    description:
                      "Shadow utility untuk memberi kedalaman visual pada elemen.",
                    previewType: "shadow",
                  })
                }
                className={`bg-surface rounded-lg p-6 text-left ${item}`}
              >
                <h3 className="text-bold text-20 text-primary-navy">
                  .{item}
                </h3>
                <p className="mt-2 text-regular text-14 text-muted">
                  Contoh penggunaan utility shadow.
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section bg-surface">
        <div className="container-page">
          <div className="mb-8">
            <p className="section-label">09. Forms</p>
            <h2 className="page-title">Form Components</h2>
            <p className="page-description">
              Klik area form untuk melihat preview.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              openPreview({
                title: "Form Components",
                category: "Form",
                className: "form-group, form-label, form-input, form-select",
                description:
                  "Form component untuk input, select, textarea, dan label.",
                previewType: "form",
              })
            }
            className="card shadow-card w-full text-left"
          >
            <form className="flex flex-col gap-5">
              <div className="form-group">
                <label className="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Masukkan nama lengkap"
                  readOnly
                />
              </div>

              <div className="form-group">
                <label className="form-label">Kategori Informasi</label>
                <select className="form-select" defaultValue="" disabled>
                  <option value="">Pilih kategori</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Pesan</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tulis pesan atau informasi"
                  readOnly
                />
              </div>
            </form>
          </button>
        </div>
      </section>

      <PreviewDrawer
        preview={selectedPreview}
        onClose={() => setSelectedPreview(null)}
      />
    </main>
  );
}

type PreviewDrawerProps = {
  preview: PreviewData | null;
  onClose: () => void;
};

function PreviewDrawer({ preview, onClose }: PreviewDrawerProps) {
  if (!preview) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/40"
      onClick={onClose}
    >
      <aside
        className="ml-auto h-full w-full max-w-[460px] overflow-y-auto bg-surface p-6 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex-between border-b border-brand pb-5">
          <div>
            <p className="section-label">{preview.category}</p>
            <h2 className="text-bold text-28 text-primary-navy">
              {preview.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary"
          >
            Tutup
          </button>
        </div>

        <div className="mt-6">
          <p className="text-regular text-14 text-muted">
            {preview.description}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-semiBold text-14 text-primary-navy mb-3">
            Class Name
          </p>

          <div className="rounded-md bg-app p-4">
            <code className="text-medium text-14 text-secondary-blue">
              {preview.className}
            </code>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-semiBold text-14 text-primary-navy mb-3">
            Preview
          </p>

          <div className="rounded-lg border border-brand bg-app p-6">
            <PreviewRenderer preview={preview} />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-semiBold text-14 text-primary-navy mb-3">
            Contoh Penggunaan
          </p>

          <pre className="overflow-x-auto rounded-md bg-primary-navy p-4 text-inverse">
            <code>{getUsageCode(preview)}</code>
          </pre>
        </div>
      </aside>
    </div>
  );
}

function PreviewRenderer({ preview }: { preview: PreviewData }) {
  if (preview.previewType === "text") {
    return (
      <p className={`${preview.className} text-primary-navy`}>
        Contoh teks menggunakan {preview.className}
      </p>
    );
  }

  if (preview.previewType === "color") {
    return (
      <div
        className={`${preview.className} rounded-lg flex-center`}
        style={{ height: "160px" }}
      >
        <span className="text-bold text-18 text-inverse">
          {preview.className}
        </span>
      </div>
    );
  }

  if (preview.previewType === "button") {
    const safeClass =
      preview.className === "btn btn-outline-light"
        ? "btn btn-dark"
        : preview.className;

    return <button className={safeClass}>Contoh Button</button>;
  }

  if (preview.previewType === "badge") {
    return <span className={preview.className}>Contoh Badge</span>;
  }

  if (preview.previewType === "card") {
    return (
      <div className={preview.className}>
        <span className="badge badge-blue">Berita</span>
        <h3 className="mt-4 text-bold text-20 text-primary-navy">
          Contoh Card
        </h3>
        <p className="mt-2 text-regular text-14 text-muted">
          Ini preview card menggunakan class {preview.className}.
        </p>
      </div>
    );
  }

  if (preview.previewType === "radius") {
    return (
      <div
        className={`${preview.className} bg-primary-navy flex-center`}
        style={{ height: "160px" }}
      >
        <span className="text-bold text-16 text-inverse">
          {preview.className}
        </span>
      </div>
    );
  }

  if (preview.previewType === "shadow") {
    return (
      <div className={`${preview.className} rounded-lg bg-surface p-6`}>
        <h3 className="text-bold text-20 text-primary-navy">
          Contoh Shadow
        </h3>
        <p className="mt-2 text-regular text-14 text-muted">
          Elemen ini memakai class {preview.className}.
        </p>
      </div>
    );
  }

  if (preview.previewType === "layout") {
    return (
      <div className="grid-auto">
        <div className="rounded-lg bg-surface p-4 text-center">Item 1</div>
        <div className="rounded-lg bg-surface p-4 text-center">Item 2</div>
        <div className="rounded-lg bg-surface p-4 text-center">Item 3</div>
      </div>
    );
  }

  if (preview.previewType === "form") {
    return (
      <form className="flex flex-col gap-4">
        <div className="form-group">
          <label className="form-label">Nama</label>
          <input className="form-input" placeholder="Masukkan nama" />
        </div>

        <div className="form-group">
          <label className="form-label">Pesan</label>
          <textarea className="form-textarea" placeholder="Tulis pesan" />
        </div>
      </form>
    );
  }

  return null;
}

function getUsageCode(preview: PreviewData) {
  if (preview.previewType === "text") {
    return `<p className="${preview.className} text-primary-navy">
  Contoh teks
</p>`;
  }

  if (preview.previewType === "color") {
    return `<div className="${preview.className}">
  Konten
</div>`;
  }

  if (preview.previewType === "button") {
    return `<button className="${preview.className}">
  Klik Saya
</button>`;
  }

  if (preview.previewType === "badge") {
    return `<span className="${preview.className}">
  Berita
</span>`;
  }

  if (preview.previewType === "card") {
    return `<article className="${preview.className}">
  <h3>Judul Card</h3>
  <p>Isi konten card.</p>
</article>`;
  }

  if (preview.previewType === "radius") {
    return `<div className="${preview.className}">
  Konten
</div>`;
  }

  if (preview.previewType === "shadow") {
    return `<div className="${preview.className}">
  Konten dengan shadow
</div>`;
  }

  if (preview.previewType === "layout") {
    return `<div className="${preview.className}">
  Konten layout
</div>`;
  }

  if (preview.previewType === "form") {
    return `<div className="form-group">
  <label className="form-label">Nama</label>
  <input className="form-input" />
</div>`;
  }

  return "";
}