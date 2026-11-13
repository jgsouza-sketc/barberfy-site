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
import telaAcessoMobile from "@/assets/tela-acesso-celular.png.asset.json";

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

const presenca: Screen = {
  id: "presenca",
  title: "Presença digital",
  description:
    "Seu link exclusivo, a identidade da sua barbearia e as prévias do que o cliente vê.",
  src: telaPresenca.url,
  alt: "Tela Minha presença digital da Barberfy com os links públicos da barbearia",
};

const personalizacao: Screen = {
  id: "personalizacao",
  title: "Personalização",
  description: "Identidade visual, tela de acesso e dados exibidos na página pública.",
  src: telaPersonalizacao.url,
  alt: "Tela de personalização da Barberfy com cores, logo e prévia em tempo real",
};

const notificacoes: Screen = {
  id: "notificacoes",
  title: "Notificações",
  description:
    "Avisos internos de novos agendamentos, confirmações, cancelamentos e remanejamentos.",
  src: telaNotificacoes.url,
  alt: "Tela de notificações internas da Barberfy",
};

const configuracoes: Screen = {
  id: "configuracoes",
  title: "Configurações",
  description: "Dados da barbearia, horários, regras de agendamento e assinatura.",
  src: telaConfiguracoes.url,
  alt: "Tela de configurações da barbearia na Barberfy",
};

export const screens: Screen[] = [presenca, personalizacao, notificacoes, configuracoes];
export const featuredScreens = {
  hero: presenca,
  aboutBack: configuracoes,
  aboutFront: personalizacao,
};

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
  { name: "Plano Inicial", price: "59,90", period: "/mês", features: [] },
  { name: "Plano Intermediário", price: "99,90", period: "/mês", features: [] },
  { name: "Plano Avançado", price: "149,90", period: "/mês", features: [] },
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
    a: "Hoje são três planos mensais, com valores de R$ 59,90, R$ 99,90 e R$ 149,90. Os detalhes de cada plano são apresentados na plataforma.",
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

/*
 * Privacy policy (LGPD). Describes only what this institutional site actually does,
 * checked against the published site: no forms or sign-up; Lovable visitor analytics
 * (cookieless, click tracking on); hosting on Lovable over Cloudflare, which sets the
 * essential `__cf_bm` bot-protection cookie (30 min); fonts and images served from the
 * site's own domain; no ads or other trackers.
 * Pending owner input: legal name, CNPJ, dedicated privacy e-mail and Encarregado (DPO).
 * Fill the `null` fields below when provided; the page shows them as pending until then.
 */
export type PolicySection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  links?: { label: string; href: string }[];
};

export const privacyController = {
  name: "Barberfy",
  role: "Responsável pelo site institucional e pela plataforma de gestão Barberfy.",
  legalName: null as string | null,
  cnpj: null as string | null,
  privacyEmail: null as string | null,
  dpo: null as string | null,
  pendingText: "A ser informado",
  pendingEmailNote: `Enquanto o e-mail dedicado não é publicado, envie sua solicitação pelo Instagram ${links.instagramHandle} ou pelo canal de atendimento da plataforma Barberfy.`,
};

export const privacyPolicy: { updatedAt: string; sections: PolicySection[] } = {
  updatedAt: "13 de novembro de 2026",
  sections: [
    {
      title: "1. Sobre esta política",
      paragraphs: [
        "Esta Política de Privacidade explica como o site institucional da Barberfy trata as informações de quem o visita, conforme a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).",
        "Ela vale apenas para este site de apresentação. O uso da plataforma Barberfy, acessada pelo botão “Conhecer a Barberfy”, segue os termos e a política de privacidade exibidos na própria plataforma.",
      ],
    },
    {
      title: "2. Quais dados este site trata",
      paragraphs: [
        "Este site não possui formulários, não pede cadastro e não solicita dados como nome, e-mail ou telefone. Mesmo assim, como em qualquer site na internet, algumas informações técnicas são tratadas automaticamente quando você o acessa:",
      ],
      items: [
        "Registros técnicos de acesso: endereço IP, data e horário, página solicitada, tipo de navegador e endereço de origem da visita, gerados pela infraestrutura de hospedagem ao entregar as páginas.",
        "Estatísticas de visitas: páginas visitadas, de onde o visitante veio, país, navegador, sistema operacional, tipo de dispositivo, tempo de permanência, velocidade de carregamento, erros e cliques em botões e links.",
        "Cookie de segurança: um cookie técnico usado pela rede de entrega do site para proteção contra acessos automatizados (detalhado na seção 5).",
      ],
    },
    {
      title: "3. Registros técnicos de acesso",
      paragraphs: [
        "Os registros técnicos são gerados automaticamente pelos servidores que entregam o site sempre que um navegador solicita uma página. Eles são necessários para que o site funcione, para identificar falhas e para proteger o site contra abusos, como ataques e acessos automatizados em massa.",
        "A Barberfy não usa esses registros para identificar visitantes, criar perfis, enviar publicidade ou cruzá-los com outras bases de dados, e não os vende a ninguém.",
      ],
    },
    {
      title: "4. Estatísticas de visitas (Analytics)",
      paragraphs: [
        "O site usa a ferramenta de estatísticas da Lovable, plataforma em que ele é construído e hospedado. Ela registra, para todos os visitantes, as páginas visitadas, de onde o visitante veio, país, navegador, sistema operacional, tipo de dispositivo (computador, celular ou tablet), tempo de permanência, velocidade de carregamento das páginas, erros e cliques em botões e links.",
        "Essa ferramenta não usa cookies, não armazena nada no seu dispositivo, não guarda endereços IP e não identifica quem é o visitante. Cada visita é contada de forma independente.",
        "A Lovable coleta esses dados para nós. A política de privacidade da Lovable explica como ela os trata.",
      ],
      links: [{ label: "Política de privacidade da Lovable", href: "https://lovable.dev/privacy" }],
    },
    {
      title: "5. Cookies",
      paragraphs: [
        "O site não usa cookies de publicidade, de rastreamento ou de análise de comportamento, e não utiliza pixels de anúncios, redes sociais incorporadas ou outras ferramentas de rastreamento.",
        "A rede de entrega do site (Cloudflare, usada pela hospedagem) pode gravar no seu navegador um cookie técnico chamado “__cf_bm”. Ele serve para diferenciar visitantes reais de acessos automatizados, protegendo o site, e expira em cerca de 30 minutos.",
        "As fontes e imagens do site são carregadas do próprio domínio, sem envio de dados para serviços como Google Fonts. Você pode bloquear ou apagar cookies nas configurações do seu navegador. Se o site passar a usar cookies não essenciais, esta política será atualizada antes.",
      ],
    },
    {
      title: "6. Finalidades e bases legais",
      items: [
        "Funcionamento, segurança e estabilidade do site (registros técnicos e cookie de segurança): legítimo interesse (art. 7º, IX, da LGPD).",
        "Estatísticas gerais de uso, para entender como o site é visitado e melhorá-lo, sem identificar visitantes: legítimo interesse (art. 7º, IX, da LGPD).",
        "Guarda de registros de acesso quando exigida por lei: cumprimento de obrigação legal (art. 7º, II, da LGPD).",
      ],
      paragraphs: ["Os dados não são vendidos nem usados para publicidade."],
    },
    {
      title: "7. Armazenamento e retenção",
      paragraphs: [
        "Os dados são mantidos apenas pelo tempo necessário para as finalidades acima ou para cumprir obrigações legais. Os critérios são:",
      ],
      items: [
        "Estatísticas de visitas: os dados detalhados ficam guardados por 90 dias, e os resumos diários (contagem de visitas e páginas vistas) por até 1 ano.",
        "Registros técnicos de acesso: mantidos pelos fornecedores de hospedagem pelo prazo definido em suas políticas. Quando a lei exigir guarda mínima — como o art. 15 do Marco Civil da Internet (Lei nº 12.965/2014), que prevê 6 meses para registros de acesso a aplicações —, esse prazo será respeitado.",
        "Cookie de segurança “__cf_bm”: expira automaticamente em cerca de 30 minutos.",
      ],
    },
    {
      title: "8. Compartilhamento com fornecedores",
      paragraphs: [
        "Para manter o site no ar, os dados técnicos são tratados pelos fornecedores de tecnologia que fazem a hospedagem e a entrega das páginas:",
      ],
      items: [
        "Lovable: plataforma de criação e hospedagem do site e responsável pela ferramenta de estatísticas de visitas.",
        "Cloudflare: rede de entrega e proteção usada pela hospedagem, que recebe as conexões dos visitantes e grava o cookie de segurança.",
      ],
      links: [
        { label: "Política de privacidade da Lovable", href: "https://lovable.dev/privacy" },
        { label: "Política de privacidade da Cloudflare", href: "https://www.cloudflare.com/privacypolicy/" },
      ],
    },
    {
      title: "9. Transferência internacional de dados",
      paragraphs: [
        "Os fornecedores de hospedagem citados acima operam servidores em vários países. Por isso, os dados técnicos de acesso e as estatísticas de visitas podem ser tratados fora do Brasil — por exemplo, no servidor da rede de entrega mais próximo do visitante.",
        "Essa transferência é necessária para que o site funcione e ocorre nos termos de uso e nas políticas de privacidade de cada fornecedor, observando o que a LGPD prevê para transferências internacionais (arts. 33 a 36).",
      ],
    },
    {
      title: "10. Links para outros sites",
      paragraphs: [
        "Este site contém links para a plataforma Barberfy e para o nosso perfil no Instagram. Esses serviços só são carregados se você clicar nos links e, a partir daí, você passa a estar sujeito às políticas de privacidade deles.",
      ],
    },
    {
      title: "11. Segurança",
      paragraphs: [
        "O site é servido apenas por conexão criptografada (HTTPS) e envia cabeçalhos de segurança aos navegadores, incluindo proteção contra a exibição do site dentro de páginas de terceiros. Nenhuma medida elimina todos os riscos, mas a Barberfy busca reduzir a exposição dos dados ao não coletar informações pessoais por formulários.",
      ],
    },
    {
      title: "12. Seus direitos",
      paragraphs: ["Pelo art. 18 da LGPD, você pode solicitar, a qualquer momento e sem custo:"],
      items: [
        "Confirmação de que tratamos dados pessoais seus.",
        "Acesso aos dados.",
        "Correção de dados incompletos, inexatos ou desatualizados.",
        "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.",
        "Portabilidade dos dados a outro fornecedor, quando aplicável.",
        "Informação sobre as entidades com as quais compartilhamos dados.",
        "Informação sobre a possibilidade de não fornecer consentimento e suas consequências, e revogação do consentimento, quando o tratamento depender dele.",
        "Oposição a tratamento baseado em legítimo interesse, quando houver descumprimento da LGPD.",
        "Revisão de decisões tomadas unicamente com base em tratamento automatizado. Este site não toma decisões automatizadas sobre visitantes.",
      ],
    },
    {
      title: "13. Como exercer seus direitos",
      items: [
        "Envie sua solicitação pelo canal indicado em “Controlador e contato”, no início desta página, informando qual direito deseja exercer.",
        "Para proteger seus dados, poderemos pedir informações que confirmem que você é o titular antes de atender o pedido.",
        "A confirmação de existência ou o acesso aos dados podem ser fornecidos de forma simplificada imediatamente ou por declaração completa em até 15 dias, conforme o art. 19 da LGPD.",
        "Como o site não coleta nome, e-mail ou outros dados de identificação, e as estatísticas não guardam endereços IP, pode não ser possível associar registros técnicos a uma pessoa. Nesse caso, explicaremos o motivo na resposta.",
        "Se não ficar satisfeito com a resposta, você pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).",
      ],
      links: [{ label: "Site da ANPD", href: "https://www.gov.br/anpd" }],
    },
    {
      title: "14. Alterações nesta política",
      paragraphs: [
        "Esta política pode ser atualizada para refletir mudanças no site, nos fornecedores ou na legislação. A data da última atualização aparece no topo desta página.",
      ],
    },
  ],
};
