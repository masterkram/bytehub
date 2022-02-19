# GDPR: Checklist

## Lawful basis and transparency
- Organizations should keep list of processing activities.
- Organizations should be prepared to show list to regulators upon request.
- Organization shows GDPR compliance via data protection impact assesment.
- Assessment should include:
  - Purposes of processing.
  - What kind of data you processed.
  - Who has access to organization.
  - Any third parties.
  - what you are doing to protect the data.
  - when is planned erase if possible.

- Conduct info audit: determine what info you process and who has access.
- Have legal justification for data processing activities.
- Provide clear legal information about your data processing and legal justification in your privacy policy.

## Data Security

- Mandatory follow "data protection by design and default" including "appropriate technical and organizational measures" to protect others personal data you use.
- Technical measures: Encryption.

## Accountability and governance:
- By data protection by design and by default
- Make sure someone in your organization is accountable for GDPR compliance.
- The person should evaluate data protection policies and their implementation.

- Sign a data processing agreement between your organization and third parties who process your personal data.
- If your organization is outside EU: appoint representative within one of EU member states.
- If necessary appoint data protection officer.

## Privacy rights: customer should have easy access to:
- Personal data about them
- How you use their data.
- How long yo plan to store their data and reason for that period.
- Get first copy of data for free (subsequent copies can be charged)


:::tip
- make sure to verify customer requesting their identity.
- you should be able to comply with this request within a month.
:::

:::theorem Personal Data
Info relating to an identifiable natural person.
:::

:::tip Personal Data
1. any information (objective or subjective)
2. relating to
3. an identifiable (ip, cookies, radio frequency)
4. natural person
:::

## GDPR applies only to data processed in one of these two ways:
- Personal data processed wholly or partly by automated means.
- Personal data processed in a non-automated manner which forms part of a "filing system".

## Privacy Design Strategies

Privacy by design more practical by strategies:
+ Bridge gap between data protection and system development.
+ GDPR above data protection regulation.

+ Taking data protection into account during software development via privacy by design `PbD`. During development life-cycle.
+ Software Architecture highest level of abstraction (functionality and quality attributes)
  + Difficult 'architectural tactics in software architecture domain for quality attributes'
  + attributes: `security`, `privacy protection`

GDPR focuses on specification, limitation, proportionality and consent "free flow of info"

:::theorem Tactic
An approach to privacy by design which contributes to the goal of an overarching privacy design strategy.
:::

:::theorem Privacy Design Strategy
Specifies a distinct architectural goal in privacy by design to achieve a certain level of privacy protection.
:::

| Minimize | Hide | Separate | Abstract | Inform | Control | Enforce | Demonstrate |
| ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Exclude, Select, Strip, Destroy | Restrict, Mix, Obfuscate, Dissociate | Distributes, Isolate | Summarize, Group |
| Supply, Notify, Explain | Consent, Choose, Update, Retract | Create, Maintain, Uphold | Audit, Log, Report |


| Action | GDPR terms |
| ------ | ------------- |
| Operate| Adaptation, Alteration, Retrieval, Consultation, Use, Alignment |
| Store  | Organization, Structuring, Storage |
| Retain | opposite to Erasure |
| Collect | Collection, Recording |
| Share | Transmission, Dissemination |
| Change | Unauthorized third party (Alteration, Adaptation )|
| Breach | unauthorized third party (Retrieval) |

Other strategies: Hide, demonstrate, obfuscate, enforce (hash, encrypt, test, audit)

Strategies for: limitation, prevention, provision, insurance: agreed upon purposes.

### Minimize (Strategy)
- Minimal operation/collection on data
  - All or nothing processing (exclusive)
  - Granular privacy settings (selective)
- Data open to collection (identify types) prior to collection
  - Apply data stripping (remove not needed fields entirely)
  - Means deletion of purposeless data
- Minimize is about data itself rather than access to it: Hide is about the access.
- Tactics exclude, select, strip, destroy.

### Hide (Strategy)
- Limits access for storage, sharing and operation on personal data with purpose.
- Tactics: restrict, mix, obfuscate, dissociate.

### Separate (Strategy)
- Preventing correlation of personal data
- Tactics: distribute, isolate

### Abstract (Strategy)
- Limiting details as much as possible
- Processing correlation instead of data itself

### Inform (Strategy)
- Tactics: supply, notify, explain

### Control (Strategy)
- Tactics: consent, update, retract provide

### Enforce (Strategy)
Tactics:
+ Create (acknowledge value of privacy)
+ Maintain (considering privacy when updating features)
+ Uphold (make sure policies respect privacy)

### Demonstrate (Strategy)
+ Ensuring evidence of adhering to obligations

## Privacy Design Strategies
Ways privacy protection may be breached

Validity of abstract and separate.