import {
  BarChart3,
  CalendarClock,
  LayoutDashboard,
  Scissors,
  UserCog,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import telaPresenca from "@/assets/tela-presenca-digital.png.asset.json";
import telaPersonalizacao from "@/assets/tela-personalizacao.png.asset.json";
import telaNotificacoes from "@/assets/tela-notificacoes.png.asset.json";
import telaConfiguracoes from "@/assets/tela-configuracoes.png.asset.json";
import telaAcessoMobile from "@/assets/tela-acesso-mobile.png.asset.json";

/*
 * All editable site content lives here: links, modules, real screenshots, plans and FAQ.
 * Only list modules that exist in the current Barberfy version.
 */

export const links = {
  platform: "https://barber-fy.base44.app",
  instagram: "https://www.instagram.com/barberrfy.app/",
  instagramHandle: "@barberrfy.app",
} as const;

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
] as const;

export type Module = { name: string; description: string; icon: LucideIcon };

export const modules: Module[] = [
  {
    name: "Dashboard",
    description: "Visão geral da barbearia e acompanhamento das principais informações do negócio.",
    icon: LayoutDashboard,
  },
  {
    name: "Agendamentos",
    description: "Organização e gerenciamento dos horários e compromissos.",
    icon: CalendarClock,
  },
  {
    name: "Clientes",
    description: "Cadastro e gerenciamento das informações dos clientes.",
    icon: Users,
  },
  {
    name: "Profissionais e Equipe",
    description: "Organização dos profissionais e gerenciamento da equipe.",
    icon: UserCog,
  },
  {
    name: "Serviços e Preços",
    description: "Cadastro e gerenciamento dos serviços oferecidos e seus valores.",
    icon: Scissors,
  },
  {
    name: "Financeiro",
    description: "Controle e acompanhamento das movimentações financeiras.",
    icon: Wallet,
  },
  {
    name: "Relatórios e Indicadores",
    description:
      "Visualização de informações e indicadores para acompanhar o desempenho da barbearia.",
    icon: BarChart3,
  },
];

/* Real captures of the platform (personal data blurred). */
export type Screen = { id: string; title: string; description: string; src: string; alt: string };

export const screens: Screen[] = [
  {
    id: "presenca",
    title: "Presença digital",
    description:
      "Seu link exclusivo, a identidade da sua barbearia e as prévias do que o cliente vê.",
    src: telaPresenca.url,
    alt: "Tela Minha presença digital da Barberfy com os links públicos da barbearia",
  },
  {
    id: "personalizacao",
    title: "Personalização",
    description: "Identidade visual, tela de acesso e dados exibidos na página pública.",
    src: telaPersonalizacao.url,
    alt: "Tela de personalização da Barberfy com cores, logo e prévia em tempo real",
  },
  {
    id: "notificacoes",
    title: "Notificações",
    description:
      "Avisos internos de novos agendamentos, confirmações, cancelamentos e remanejamentos.",
    src: telaNotificacoes.url,
    alt: "Tela de notificações internas da Barberfy",
  },
  {
    id: "configuracoes",
    title: "Configurações",
    description: "Dados da barbearia, horários, regras de agendamento e assinatura.",
    src: telaConfiguracoes.url,
    alt: "Tela de configurações da barbearia na Barberfy",
  },
];

export const mobileScreen = {
  src: telaAcessoMobile.url,
  alt: "Tela de acesso ao painel da Barberfy",
};

export const benefits = [
  {
    title: "Centralização das informações",
    description:
      "Clientes, equipe, serviços, agenda e financeiro reunidos em uma única plataforma.",
  },
  {
    title: "Organização da rotina",
    description: "Horários e compromissos organizados para o dia a dia da barbearia.",
  },
  {
    title: "Facilidade de acompanhamento",
    description: "O dashboard mostra as principais informações do negócio em uma visão geral.",
  },
  {
    title: "Visibilidade da operação",
    description: "Relatórios e indicadores para acompanhar o desempenho da barbearia.",
  },
  {
    title: "Gestão mais estruturada",
    description: "Cadastros, preços e movimentações financeiras registrados de forma organizada.",
  },
];

/*
 * Plans: reference values. Names, limits and features must be confirmed before publishing.
 * Add confirmed items to `features`; while empty, the card says details are being confirmed.
 */
export type Plan = { name: string; price: string; period: string; features: string[] };

export const plans: Plan[] = [
  { name: "Plano Inicial", price: "29,90", period: "/mês", features: [] },
  { name: "Plano Intermediário", price: "49,90", period: "/mês", features: [] },
  { name: "Plano Avançado", price: "79,90", period: "/mês", features: [] },
];

export const faq = [
  {
    q: "O que é a Barberfy?",
    a: "A Barberfy é uma plataforma de gestão desenvolvida para barbearias. Ela reúne dashboard, agendamentos, clientes, profissionais e equipe, serviços e preços, financeiro e relatórios em um só lugar.",
  },
  {
    q: "Para quem a plataforma foi desenvolvida?",
    a: "Para proprietários e gestores de barbearias que querem organizar a operação e acompanhar as informações importantes do negócio.",
  },
  {
    q: "Como funciona a contratação?",
    a: "A Barberfy funciona por assinatura mensal, de acordo com o plano escolhido. Para conhecer as condições atuais, acesse a plataforma.",
  },
  {
    q: "Quais são os planos disponíveis?",
    a: "Hoje são três planos mensais, com valores de R$ 29,90, R$ 49,90 e R$ 79,90. Os detalhes de cada plano são apresentados na plataforma.",
  },
  {
    q: "Como posso conhecer a plataforma?",
    a: "Clique em “Conhecer a Barberfy” em qualquer parte deste site para acessar a plataforma.",
  },
  {
    q: "Como entrar em contato?",
    a: `Pelo canal oficial da plataforma ou pelo Instagram ${links.instagramHandle}.`,
  },
];
