export interface AspirationalPillar {
  label: string;
  target: string;
  mission: string;
}

export const ASPIRATIONAL_PILLARS: AspirationalPillar[] = [
  { 
    label: "CROSS-BORDER MISSION", 
    target: "Zero Friction", 
    mission: "Instant, transparent remittances without hidden correspondent banking fees" 
  },
  { 
    label: "REGULATORY COMPLIANCE", 
    target: "Autonomous", 
    mission: "AI-driven entity screening, automated SAR reporting, and sponsor bank escrow" 
  },
  { 
    label: "SETTLEMENT FINALITY", 
    target: "Atomic & Direct", 
    mission: "Direct clearing into SEPA Instant, UK Faster Payments, UPI & local rails" 
  },
  { 
    label: "DEVELOPER ACCELERATION", 
    target: "Plug-and-Scale", 
    mission: "Unified multi-currency virtual ledgers designed to replace fragmented legacy vendor stacks" 
  },
];

export const CORE_CAPABILITIES = [
  {
    id: "01",
    code: "BAAS-LEDGER",
    title: "Autonomous Banking-as-a-Service",
    summary: "Multi-currency virtual ledger architecture engineered to provide programmable accounts and real-time double-entry reconciliation.",
    details: [
      "Dynamic virtual IBAN issuance mapped to regulated sponsor banking rails.",
      "Deterministic balance state verification with cryptographic audit trails.",
      "Real-time event webhooks for balance adjustments and limits enforcement."
    ],
    status: "IN DEVELOPMENT",
    tag: "Core Engine"
  },
  {
    id: "02",
    code: "AI-SANCTIONS",
    title: "Agentic Compliance & Risk Shield",
    summary: "Continuous transaction monitoring combining graph heuristics and fine-tuned regulatory reasoning models.",
    details: [
      "Targeted sub-second OFAC, UN, and PEP sanction matching with entity disambiguation.",
      "Automated Suspicious Activity Report (SAR) narrative draft synthesis.",
      "Dynamic risk-based transaction velocity checks tailored to entity profiles."
    ],
    status: "PROTOTYPING",
    tag: "Autonomous AI"
  },
  {
    id: "03",
    code: "FX-SETTLEMENT",
    title: "Cross-Border Liquidity Rails",
    summary: "High-frequency remittance routing architecture aligned with RemitPe's global corridor vision.",
    details: [
      "Automated FX spread optimization and real-time liquidity routing.",
      "Direct integration with regional clearing rails: SEPA Instant, Faster Payments, and local corridors.",
      "Minimizing counterparty settlement risk via atomic double-entry clearing."
    ],
    status: "REMITPE VISION",
    tag: "RemitPe Rails"
  },
  {
    id: "04",
    code: "ORCHESTRATOR",
    title: "Full-Stack Core Banking Accelerator",
    summary: "Pre-assembled digital banking middleware connecting regulated sponsor banks with agile customer experiences.",
    details: [
      "White-label mobile & web neobank SDK blueprints with biometric authentication.",
      "Modular card issuance (virtual & physical card provisioning architectures).",
      "Unified compliance dashboard for sponsor bank regulatory transparency."
    ],
    status: "ROADMAP",
    tag: "Viom-Class Stack"
  }
];

export const CODE_SNIPPETS = {
  account: {
    language: "typescript",
    title: "POST /v1/baas/virtual-accounts",
    filename: "create-ledger-account.ts",
    code: `import { FinclusiveClient } from "@finclusive/sdk";

const finclusive = new FinclusiveClient({
  apiKey: process.env.FINCLUSIVE_SECRET_KEY!,
  environment: "sandbox"
});

// Programmatic virtual account provision blueprint
const account = await finclusive.accounts.create({
  holder: {
    type: "corporate",
    legalName: "FinTech Innovation Labs",
    jurisdiction: "GB",
    verifiedKybId: "kyb_sandbox_ref"
  },
  currency: "EUR",
  features: ["SEPA_INSTANT", "DIRECT_DEBIT", "AGENTIC_RECONCILIATION"],
  metadata: {
    purpose: "cross_border_remittance_pilot",
    escrowTier: "sponsor_bank_aligned"
  }
});

console.log("Virtual account provisioned:", account.iban);
// => IBAN: DE89 3704 0044 0532 0130 00`
  },
  compliance: {
    language: "python",
    title: "AI Compliance Screening Pipeline",
    filename: "agentic_sar_evaluator.py",
    code: `from finclusive_ai import RiskSupervisor, ContextGraph

supervisor = RiskSupervisor(model="finclusive-reason-v4")

async def evaluate_transaction(tx):
    # Contextual graph evaluation against sanction lists & behavioural risk
    risk_evaluation = await supervisor.evaluate_intent(
        sender=tx.sender_id,
        recipient=tx.recipient_iban,
        amount=tx.amount,
        corridor=tx.corridor,
        device_fingerprint=tx.telemetry
    )
    
    if risk_evaluation.flagged:
        sar_draft = await supervisor.synthesize_regulatory_dossier(risk_evaluation)
        return {"action": "HOLD_FOR_SPONSOR", "dossier": sar_draft.id}
        
    return {"action": "APPROVE_ATOMIC_CLEAR", "status": "COMPLIANT"}`
  },
  ledger: {
    language: "json",
    title: "Immutable Double-Entry Ledger Event",
    filename: "ledger_audit_diff.json",
    code: `{
  "event_id": "evt_sandbox_ref",
  "timestamp": "2026-10-29T10:48:19.402Z",
  "operation": "CROSS_BORDER_DISBURSEMENT",
  "corridor": "EUR -> INR",
  "entries": [
    {
      "account": "liab:customer:cust_pilot",
      "currency": "EUR",
      "amount": "-500.00",
      "type": "DEBIT"
    },
    {
      "account": "asset:settlement:remitpe_eur",
      "currency": "EUR",
      "amount": "+500.00",
      "type": "CREDIT"
    },
    {
      "account": "asset:treasury:remitpe_inr",
      "currency": "INR",
      "amount": "-45250.00",
      "type": "DEBIT"
    },
    {
      "account": "liab:beneficiary:inr_recipient",
      "currency": "INR",
      "amount": "+45250.00",
      "type": "CREDIT"
    }
  ],
  "cryptographic_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "status": "ATOMIC_SETTLED"
}`
  }
};
