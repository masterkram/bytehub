# Exam 2: Project performance (management & execution)

## Agile vs Traditional Paper.

Agile comes from software development, but is applicable to other types of projects. 

**Agile PM advantages:**
+ accelerating project/product delivery
+ enhancing ability to manage changing priorities.

**Agile PM challenges:**
+ work prioritization.
+ alignment among stakeholders on what to build next.
+ insufficient time for testing.
+ long feedback loops.
+ incompatibility of agile with the organizational processes and functions.

`Ciric, D., Lalic, B., Gracanin, D., Tasic, N.,Delic, M., & Medic, N. (2019). Agile vs. Traditional approach in project management: Strategies, challenges and reasons to introduce agile. Procedia Manufacturing, 39, 1407-1414.`

## Agile vs Structured software development paper
Study of the distributed project of both Agile and Structured development teams. The study shows no significant difference between the two types of processes.



## Does Agile Work ?
Study tested `efficiency` and `stakeholder satisfaction` shows positive impact of Agile.

Bell curve relationship, between planning and project success:
+ too little planning is bad
+ too much planning is also bad

Agile depends on continuous customer involvement
+ for establishing goals
+ to provide feedback to progressive prototypes

Customers believe that daily meetings kept them up to date and helped to "reduce the confusion about what should be developed" [^1]

Scrum Poker was found to have a positive impact, because it gives insight into the development process [^2]

:::theorem Extreme Programming (XP)
Agile methodology for software development based on scenario-based requirements, testing happening as early as possible and pair programming.
:::

In XP customer time is spent on:
1. planning poker sessions
2. acceptance testing
3. retrospective sessions

Study suggests Agile has a positive impact on efficiency, stakeholder satisfaction and perception of overall project performance.

`Serrador, P., and Pinto, J. (2015) Does Agile work? A quantitative analysis of agile project success. International Journal of Project Management, 33 (5): 1040-1051`

## Cost and time project mgmt success paper.

## System Dynamics Approach for Forecasting Performance of Construction Projects

Paper is focused on performance forecasting too assist in obtaining warnings about potential problems.

:::theorem System Dynamics
System Dynamics is a computer-based mathematical modeling approach for strategy development and better decision making in complex systems. This approach uses computer-aided simulation methodology based on feedback systems theory which complements the other Systems Thinking approaches.
:::

Performance forecasting is a complex and dynamic process that includes many indices that are interdependent. Therefore a System Dynamics model was created which can forecast the performance of (construction) projects based on the contractor's perspective.

Model was developed with the performance variables:
1. cost
2. schedule
3. quality
4. profitability
5. safety
6. environment
7. team satisfaction
8. client satisfaction

:::theorem Casual Loop Diagram
A causal loop diagram consists of four basic elements: the variables, the links between them, the signs on the links (which show how the variables are interconnected), and the sign of the loop (which shows what type of behavior the system will produce). By representing a problem or issue from a causal perspective, you can become more aware of the structural forces that produce puzzling behavior.
:::

> Project Management Casual Loop Diagram
![cld](./img/cld.png)

`Leon H, Osman H, Georgy M, et al. (2018) System Dynamics Approach for Forecasting Performance of Construction Projects. Journal of Management in Engineering 34(1): 04017049. DOI: 10.1061/(ASCE)ME.1943-5479.0000575`

## Dashboards

:::theorem Dashboard
A data dashboard is any visual display of data used to monitor conditions and or facilitate understanding. **key indicators** need to be understood at a glance.
:::

An analytical process is only as good as how it is *communicated* and *deployed*.
+ who receives the reports ?
+ how are the workflows deployed to production ?
+ can data insights be turned into useful policies?

Today it is common for reports to be **automated**

### Dashboards
**Purpose**
+ communicate data
+ report data
#### Dashboard Foundation
+ who is the target audience?
  + role (what decisions do they make)
  + workflow (dashboard used on daily basis vs weekly)
  + data expertise level
+ what value does the dashboard add?
  + to help managers make decisions
  + to educate people
  + to set goals and expectations
  + to evaluate and communicate progress
+ what type of dashboard is being created?
  + scope: specific to broad
  + time horizon:
    + historical
    + real time
    + snapshot
    + predictive
  + level of detail
    + high level: only critical data
    + drill down: allow the user to gain more context by looking at more data.
  + point of view:
    + prescriptive: gives a solution to problem using data as proof.
    + exploratory: allows to explotre to find possible issues.

> The foundation of good dashboards comes down to deciding what information is most important to the given audience in the context of interest; they should have a core theme based on the essence of either a problem or data story, while removing extraneous information from the process.
#### Dashboard Structure
+ Form: format in which the dashboard is delivered
  + paper
  + slides
  + web or mobile app
+ Layout: physical look of the dashboard
  + distributions => bar chart, scatter plots
  + compositions => pie chart, bar chart, tree map
  + comparisons => bubble chart, bullet plots
  + trends => line chart, area plot
  + use of icons, colors and fonts can guide the viewer attention.
+ design principles: fundamental objectives to guide design
+ functionality: capabilities of the dashboard
  + filters is a good way to customize the scope of a dashboard.

#### Dashboard Design
Critical components:
+ grids: makes data clean and readable
+ white space: helps with clutter.
+ color: provides meaning
+ visuals.

`Pelletier, Maia, and Patrick Boily. 2019. “Dashboards and Data Visualization, with Examples.”`

## From a Scrum Reference Ontology to the Integration of Applications for Data-Driven Software Development

Tools are used to support Scrum, For example:
+ Project management tools.
+ Git Repositories.
+ Quality assessment tools.

These tools all have useful data stored, but the data is spread over all the applications. The consequence of this is that there are **missing opportunity for data-driven decision making**

:::tip Example
Merge requests are in gitlab repository. (git repository)
User stories are in trello. (project management tool)
Code quality reports are stored locally (quality assessment tools)
:::

**Goal of the study**: *create a model of scrum for software development*. (called ontology or SRO *scrum reference ontology*) The model of scrum can then be used by the developers of the tools that support scrum to integrate all the applications. When all the applications are integrated, this will enable better decision making.

**Result of the study**: the integrated tools improved the software development unit it was tested in:
+ improved estimates
+ helped allocate teams
+ helped manage productivity
+ enabled to identify and fix problems with the Scrum process.

The model created (**SRO**) was made using the *Software Ontology Network* which is a collection of base models for software development, so it has has a box with some entities already linked together, which the study uses to have less work and to ensure that it's not fragmented from other models.

:::theorem Ontology
Ontology is a Model for something in the real world. It has entities, relationships and properties. (Like an Entity Relationship Diagram from databases).

It can be split into:
+ foundational ontologies: models about the basics of the world.
+ core ontologies: more detailed models, depends on foundational. 
+ domain ontologies: even more detailed, depends on core.
:::

The models that the study borrows from the *software ontology network* are:
+ enterprise ontology: core ontology that roles in organizations.
+ software process ontology: core ontology that models software development processes.
+ software requrirements ontology: domain ontology that models software requirements.

### Scrum Reference Ontology

It is organized into 5 sub-models:
+ **Scrum Process**: about events that occur during a project.
+ **Scrum Stakeholders**: about the teams and roles in a project.
+ **Scrum Stakeholder Participation**: about the participation of stakeholders in events.
+ **Product and Sprint Backlog**: about the requirements of a project.
+ **Scrum Deliverables**: about the results produced by a project.

#### Scrum Process
![scrum process ontology](./img/process-ont.png)
#### Scrum Stakeholders
![scrum stakeholder ontology](./img/stake-ont.png)

#### Scrum Stakeholder Participation
![scrum stakeholder participation ontology](./img/stake-par-ont.png)

#### Product and Sprint Backlog
![scrum Product and Sprint Backlog ontology](./img/prod-back-ont.png)

#### Scrum Deliverables
![Scrum Deliverables ontology](./img/deliver-ont.png)

### Application
To integrate two platforms that support Scrum you need to:
1. convert the Scrum reference ontology into an actual data model. (convert it to a structure more suitable for a database)
2. retrieve the data model of all applications you wish to integrate.
3. identify mappings between the applications and with the **SRO**.
4. Implementation

**SRO adapted to a ERD**
[SRO adapted to something that can be stored](./img/id-sro.png)

`Paulo Sergio Santos Júnior, Monalessa Perini Barcellos, Ricardo de Almeida Falbo, Joao Paulo A. Almeida (2021). From a Scrum Reference Ontology to the Integration of Applications for Data-Driven Software Development. Information and Software Technology, 136 (2021) 106570`

## European Digital Single Market

Digital Single Market is a goal of the European Union.

:::theorem European Digital Single Market
A single market is a type of trade bloc in which most trade barriers have been removed (for goods) with some common policies on product regulation, and freedom of movement of the factors of production (capital and labour) and of enterprise and services.
The EU divides the single market into fields:
+ e-commerce
+ e-governance
+ data & ai
+ security
+ consumer protection
+ electronic communication networks.
:::

In 2019 the EU agreed to do implement the following policies to promote an EU Digital Single Market:
+ Ecommerce Policies
  + cross border portability of some digital content
  + prohibition of unjustified geo-locking
  + simplification of VAT declaration and collection
  + improvement of the `.eu` top level domain
  + new copyright rules facilitating online content
  + national rules regarding platforms harmonized
+ E Gov Policies
  + best practices suggested.
+ Data & AI
  + data location requirements have been reduced.
  + national rules harmonized for better cross border data movement
  + new European Data Protection Board
  + funds allocated for AI
+ Security
  + collaboration between cybersec agencies
  + funds allocated
+ Consumer Protection
  + adaptation of existing rules for the digital sector
    + explain functioning of "algorithms"
    + rules about monetary prices not shown
+ Electronic communication networks and services
  + roaming calls rules
  + rules for frequency spectrums eased
  + funds allocated for 5G

**Future Potential**
1. Implement agreed upon policies
2. Evaluate the performance of the policies

Priorities:
+ Make the EU a tech powerhouse for emerging and important tech.
+ Stimulate the development of online platforms
+ Stimulate E-Gov
  + Adapt blockchain tech

For Policy techniques to be used by the EU, the study recommends:
+ principles based regulation: because it can be adapted to quickly changing environment.
+ code of conduct
+ rules enforced by EU (not the country) through a EU regulator.
+ recommends authorities to "automate enforcement" through IT.
+ non regulatory initiatives:
  + funds
  + monitoring
  + best practices

`De  Streele,  A.  (2019) Contribution  to  Growth:  European  Digital  Single Market. European Parliament.`

## GDPR Summary

:::tip GDPR Aim
+ protects individuals' data from private and public sector.
+ allows individuals to better control their personal data.
+ establishes a system of independent authorities in charge of monitoring compliance.
:::

:::tip GDPR Key Points
+ **individuals rights**:
  + easier access to an individual's own data.
    + provide info on how data is processed.
  + new right to data portability.
    + ability to transmit data between service providers.
  + a clearer right to erasure.
    + *right to be forgotten*
    + data must be deleted if the individual no longer wants their data processed.
  + the right to know when a person's data has been breached.
    + companies must notify the relevant data protection authority.
    + in serious cases also notify individuals.
+ **rules for businesses**:
  + a set of EU wide rules for data protection.
  + a data protection officer: must be designated by organizations who process large amounts of data or special categories of data like health-related data.
  + one stop shop: businesses only deal with the authority in their country.
  + EU rules for non EU companies: companies outside the EU must follow GDPR rules when offering services in the EU.
  + Innovation friendly rules: data protection by design & default.
  + Privacy friendly techniques:
    + Pseudonymisation: field names are replaced with an fake name.
    + Encryption
  + Removal of notifications
    + Scraped most notification obligations (i.e when a company needs to report that something happened)
  + Data protection impact assessments
    + Organizations will need to carry out impact assessments when processing is at high risk of affecting individuals.
  + Record keeping.
    + small and medium companies do not need to keep records of processing activities (except if data is high risk)
  + A modern toolbox for international data transfers.
    + GDPR offers legal tools to allow companies to transfer personal data to companies outside the EU.
:::

**References** 

[^1]: [C. Mann and F. Maurer, "A case study on the impact of scrum on overtime and customer satisfaction," Agile Development Conference (ADC'05), 2005, pp. 70-79, doi: 10.1109/ADC.2005.1.](https://doi-org.ezproxy2.utwente.nl/10.1109/ADC.2005.1)
[^2]: []()