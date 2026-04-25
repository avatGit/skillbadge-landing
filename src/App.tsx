import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Commencer from "./pages/Commencer.tsx"; 
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Page de segmentation des profils */}
          <Route path="/commencer" element={<Commencer />} />

          {/* Routes temporaires pour la Phase 1 (à remplacer par les vraies interfaces plus tard) */}
          <Route
            path="/login"
            element={
              <div className="min-h-screen flex items-center justify-center bg-surface-soft">
                <div className="text-center p-8 bg-card rounded-2xl shadow-soft border border-border max-w-md">
                  <h1 className="text-2xl font-bold mb-4 text-foreground">
                    Connexion sécurisée
                  </h1>
                  <p className="text-muted-foreground mb-6">
                    Interface d'authentification en cours de développement pour
                    la Phase 2.
                  </p>
                  <a
                    href="/commencer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    ← Retour à la sélection de profil
                  </a>
                </div>
              </div>
            }
          />

          <Route
            path="/verify"
            element={
              <div className="min-h-screen flex items-center justify-center bg-surface-soft">
                <div className="text-center p-8 bg-card rounded-2xl shadow-soft border border-border max-w-md">
                  <h1 className="text-2xl font-bold mb-4 text-foreground">
                    Vérification de badge
                  </h1>
                  <p className="text-muted-foreground mb-6">
                    Outil recruteur et moteur de vérification blockchain en
                    cours d'intégration.
                  </p>
                  <a
                    href="/commencer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    ← Retour à la sélection de profil
                  </a>
                </div>
              </div>
            }
          />

          {/*  GARDE CETTE LIGNE EN DERNIER */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
