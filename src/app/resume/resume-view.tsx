"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/data/config";

export default function ResumeView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-xl"
      >
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al portafolio
        </Link>

        <h1 className="font-display text-4xl font-bold tracking-tight">
          CV disponible por solicitud
        </h1>
        <p className="mt-4 text-muted-foreground">
          Soy Andres Felipe Rodriguez Rodriguez, Backend Developer enfocado en
          Java, Spring Boot y APIs REST. Puedes solicitar mi CV directamente por
          correo.
        </p>

        <Button className="mt-8" asChild>
          <a href={`mailto:${config.email}?subject=Solicitud%20de%20CV%20-%20Andres%20Rodriguez`}>
            <Mail className="mr-2 h-4 w-4" />
            Solicitar CV
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
