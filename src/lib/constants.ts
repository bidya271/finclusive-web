export interface MetricItem {
  label: string;
  value: string;
  context: string;
}

export const PLATFORM_METRICS: MetricItem[] = [
  { label: "SPRINT TO FIRST SANDBOX LEDGER", value: "7 Days", context: "Immediate tenant onboarding" },
  { label: "AML / SANCTION SCREENING LATENCY", value: "85ms", context: "Deterministic sub-100ms LLM agent" },
  { label: "CORE SETTLEMENT FINALITY", value: "Sub-1s", context: "Instant atomic ledger clearing" },
  { label: "FOUNDING ENGINEERING BENCHMARK", value: "100%", context: "Dedicated architect-level delivery" },
];

export const CORE_CAPABILITIES = [
  {
    id: "01",
    code: "BAAS-LEDGER",
    title: "Autonomous Banking-as-a-Service",
    summary: "Multi-currency virtual ledger architecture with sub-millisecond double-entry reconciliation and programmatic accounts.",
    details: [
      "Dynamic IBAN & FBO account creation in primary UK & EU corridors.",
      "Deterministic balance state verification with cryptographic audit trails.",
      "Real-time event webhooks for ledger balance shifts and limits enforcement."
    ],
    status: "PILOT READY",
    tag: "Core Engine"
  },
  {
    id: "02",
    code: "AI-SANCTIONS",
    title: "Agentic Compliance & Risk Shield",
    summary: "Continuous transaction screening combining graph heuristics and fine-tuned regulatory reasoning models.",
    details: [
      "Sub-80ms OFAC, UN, and PEP sanction matching with entity disambiguation.",
      "Automated Suspicious Activity Report (SAR) narrative draft generation.",
      "Dynamic risk-based transaction velocity limits tailored to entity profiles."
    ],
    status: "ACTIVE EVAL",
    tag: "Autonomous AI"
  },
  {
    id: "03",
    code: "FX-SETTLEMENT",
    title: "Cross-Border Liquidity Engine",
    summary: "High-frequency remittance routing architecture aligned with RemitPe global payment rails.",
    details: [
      "Automated FX spread optimization and real-time liquidity pooling.",
      "Instant rails integration: SEPA Instant, UK Faster Payments, and local clearing.",
      "Zero counterparty settlement risk via atomic clearing protocols."
    ],
    status: "REMITPE RAILS",
    tag: "RemitPe Proven"
  },
  {
    id: "04",
    code: "ORCHESTRATOR",
    title: "Full-Stack Core Banking Accelerator",
    summary: "Pre-assembled digital banking middleware bridging regulated sponsor banks with agile customer touchpoints.",
    details: [
      "White-label mobile & web neobank SDKs with biometric authentication.",
      "Modular card issuance (virtual & physical card provisioning blueprints).",
      "Unified compliance portal for sponsor bank regulatory oversight."
    ],
    status: "EARLY ACCESS",
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

// Issue sovereign virtual IBAN for early pilot launch
const account = await finclusive.accounts.create({
  holder: {
    type: "corporate",
    legalName: "FinTech Pilot Corp Ltd",
    jurisdiction: "GB",
    verifiedKybId: "kyb_pilot_89a01"
  },
  currency: "EUR",
  features: ["SEPA_INSTANT", "DIRECT_DEBIT", "AGENTIC_RECONCILIATION"],
  metadata: {
    tenantId: "early_stage_tenant_01",
    tier: "founding_cohort"
  }
});

console.log("Account provisioned:", account.iban);
// => IBAN: DE89 3704 0044 0532 0130 00
// Latency: 195ms | Status: ACTIVE_SANDBOX`
  },
  compliance: {
    language: "python",
    title: "AI Compliance Screening Pipeline",
    filename: "agentic_sar_evaluator.py",
    code: `from finclusive_ai import RiskSupervisor, ContextGraph

supervisor = RiskSupervisor(model="finclusive-reason-v4", latency_budget_ms=100)

async def evaluate_transaction(tx):
    # Contextual graph analysis against sanction lists & behavioral history
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
        
    return {"action": "APPROVE_ATOMIC_CLEAR", "confidence": 0.9992}`
  },
  ledger: {
    language: "json",
    title: "Immutable Double-Entry Ledger Event",
    filename: "ledger_audit_diff.json",
    code: `{
  "event_id": "evt_pilot_90f2",
  "timestamp": "2026-10-29T10:48:19.402Z",
  "operation": "CROSS_BORDER_DISBURSEMENT",
  "corridor": "EUR -> INR",
  "entries": [
    {
      "account": "liab:customer:cust_pilot_01",
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
      "account": "liab:beneficiary:inr_pilot_88",
      "currency": "INR",
      "amount": "+45250.00",
      "type": "CREDIT"
    }
  ],
  "cryptographic_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "status": "SETTLED"
}`
  }
};
