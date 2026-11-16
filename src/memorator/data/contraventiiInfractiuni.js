// Legislație: contravenții și infracțiuni (Clasa A, B). Sursă: questionsLegislatie.js.
const data = {
  title: 'Legislație · Contravenții și infracțiuni',
  subtitle:
    'Diferența dintre contravenție și infracțiune, procedura procesului-verbal cu termenele ei, faptele care sunt contravenții și infracțiunile contra siguranței navigației.',
  sections: [
    {
      title: '1. Contravenție sau infracțiune?',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['', 'Contravenție', 'Infracțiune'],
          rows: [
            ['**Definiție**', 'Faptă săvârșită **cu vinovăție**, stabilită și sancționată **prin lege**.', 'Faptă care prezintă **pericol social**, săvârșită **cu vinovăție** și prevăzută de **legea penală**.'],
            ['**Gravitate**', 'Pericol social mai mic.', '**Pericol social mai ridicat**.'],
            ['**Sancțiune**', 'Avertisment sau amendă, prin **proces-verbal**.', 'Pedeapsa cu **închisoarea** (și răspundere penală).'],
            ['**Se înlătură prin**', 'legitimă apărare, stare de necesitate, constrângere fizică sau morală, **caz fortuit**', 'legitimă apărare, stare de necesitate, constrângere fizică sau morală (cauze care înlătură caracterul penal / răspunderea penală)'],
          ],
        },
        {
          type: 'tip',
          text: '**Regulă la test:** orice încălcare **administrativă** a regulilor portului sau navigației (acte, lumini, semnale, anunțuri, comportament) = **contravenție**. Dacă fapta pune în pericol serios navigația, vieți sau nava, ori e legată de **alcool, brevet, abandon, asistență** = **infracțiune**.',
        },
      ],
    },
    {
      title: '2. Procesul-verbal de contravenție – termene',
      blocks: [
        {
          type: 'table',
          boldFirst: true,
          head: ['Ce', 'Regula / termenul'],
          rows: [
            ['**Avertismentul**', 'Atenționare **verbală sau scrisă**; se aplică pentru o faptă de **gravitate redusă**.'],
            ['**Aplicarea sancțiunii**', 'Se face prin **procesul-verbal de contravenție**; pentru mai multe contravenții în același timp se încheie **un singur** proces-verbal.'],
            ['**Elemente obligatorii**', 'nume, prenume și calitatea agentului constatator și a contravenientului, descrierea faptei, data, semnătura agentului. **Lipsa lor = nulitatea** procesului-verbal.'],
            ['Contravenientul **refuză să semneze**', 'Procesul-verbal se confirmă de **cel puțin un martor**. Fără martor: agentul **precizează motivele**.'],
            ['Refuză să se identifice (în fața ofițerilor de căpitănie)', 'Se apelează la **poliție, jandarmerie sau gardieni publici**.'],
            ['Contravenientului i se comunică', '**O copie** a procesului-verbal.'],
            ['**Plata pe loc**', 'Pe loc sau în **48 de ore**: **jumătate din minimul amenzii** prevăzut în actul normativ.'],
            ['**Plângerea**', 'În **15 zile**, depusă la **organul agentului constatator**, care o trimite **la judecătorie**. Plângerea **suspendă executarea**.'],
            ['Hotărârea judecătorească', 'Se atacă cu **recurs**.'],
            ['**Prescriere – aplicarea sancțiunii**', '**6 luni** de la data săvârșirii faptei.'],
            ['**Prescriere – executarea amenzii**', 'dacă procesul-verbal **nu e comunicat într-o lună** de la aplicare; în general **5 ani** de la 1 ianuarie a anului următor celui în care a luat naștere dreptul.'],
          ],
        },
      ],
    },
    {
      title: '3. Faptele care sunt contravenții',
      blocks: [
        {
          type: 'list',
          title: 'Pavilion, marcaje, acte',
          items: [
            'nearborarea pavilionului național în apele românești (sosire, staționare, plecare) sau arborarea lui în stare necorespunzătoare;',
            'neînscrierea numelui ambarcațiunii pe corp și suprastructură, sau a însemnelor de identificare;',
            'plecarea din port, rada sau locul de acostare **fără permis de plecare** și acte de bord, sau cu acte **expirate**;',
            'pierderea actelor de bord (în afară de actul de naționalitate) și **neanunțarea** căpităniei;',
            'staționarea în port **> 12 ore** după permisul de plecare, fără redepunerea actelor;',
            'nedepunerea în **14 zile** a actelor pentru **înmatriculare, radiere, transfer de proprietate** sau schimbarea domiciliului armatorului.',
          ],
        },
        {
          type: 'list',
          title: 'Echipament, echipaj, stare tehnică',
          items: [
            'navigarea fără **materialele de vitalitate** sau fără **mijloacele de salvare** din actele de bord;',
            'dotarea necorespunzătoare cu mijloace de **stins incendiul**;',
            'lipsa **rolurilor** de incendiu, abandon și gaură de apă;',
            'echipaj mai mic decât cel stabilit pentru siguranța navigației;',
            'folosirea la bord a persoanelor fără **brevet / certificat de capacitate** (dacă fapta nu e infracțiune);',
            'neîntreținerea punților, santinelor, compartimentului mașini (pericol de poluare, incendiu, explozie, boli, accidente) și a mijloacelor de legare la mal;',
            'nesemnalizarea sau semnalizarea cu **lumini neregulamentare**.',
          ],
        },
        {
          type: 'list',
          title: 'Navigație și manevre',
          items: [
            'staționarea sau ancorarea într-o **trecere îngustă**, o **curbă bruscă** sau lângă nave cu **mărfuri periculoase**;',
            'ancorarea / grăparea unde sunt **semnale de interzicere** a ancorării (în afara forței majore);',
            'ancorarea sau acostarea în afara limitelor portului **în alte locuri** decât cele stabilite, fără permisiunea căpităniei (exceptând forța majoră);',
            'trecerea prin fața portului sau pe lângă nave la lucru **fără reducerea vitezei din timp**;',
            'nerespectarea regulilor de **întâlnire, depășire**, tăierea drumului altei nave;',
            'nerespectarea regulilor privind **pescajul, viteza, convoiul, podurile**, staționarea pe canale;',
            'nerespectarea regulilor la trecerea prin **ecluze** și stavilare;',
            'legarea unei ambarcațiuni de alta **fără permisiune** sau de cele aflate la ancoră în raza porturilor fără autorizare;',
            'refuzul de a se ajuta reciproc la manevre când siguranța o cere.',
          ],
        },
        {
          type: 'list',
          title: 'Disciplină în port, anunțuri',
          items: [
            'neanunțarea către **Port control** a intrării / ieșirii, a începerii manevrelor sau a trecerii de la un mal la altul;',
            'probe la mașini cu punerea în mișcare a elicelor în port **fără autorizație**; scoaterea din funcțiune a aparatului motor fără autorizație;',
            'folosirea stațiilor radio **sigilate** în port fără autorizație (în afara forței majore);',
            'deratizare / dezinsecție / dezinfecție fără permisiune sau în alte locuri decât cele stabilite;',
            'nerespectarea dispozițiilor căpităniei (ordine și siguranță, iernatic, locuri de parcare) și **nesupunerea la somațiile** organelor căpităniei;',
            'organizarea de **plaje, serbări nautice, curse de înot** sau manifestări sportive pe apă fără permisiune și autorizare scrisă;',
            'blocarea căilor de acces pe dane; degradarea malurilor, digurilor, lucrărilor hidrotehnice;',
            'începerea **dezmembrării** înainte de depunerea documentației de radiere.',
          ],
        },
        {
          type: 'list',
          title: 'Evenimente și comportament',
          items: [
            'neanunțarea către căpitănie a **abordajelor, incendiilor, avariilor, poluării, înecului, dispariției** ambarcațiunii;',
            'neanunțarea **deteriorării / deplasării** mijloacelor de semnalizare plutitoare sau de pe uscat; **nebalizarea** locului unde s-a scufundat un obiect periculos;',
            'aprinderea de materiale inflamabile sau fumigene, **focuri de armă**, semnale fonice / luminoase neadmise;',
            'manipularea necorespunzătoare a tuburilor flexibile (scurgeri de produse petroliere);',
            'refuzul oricărui membru al echipajului de a se supune **cercetărilor** căpităniei; refuzul persoanelor străine de a coborî la somație;',
            'comportament necorespunzător, **injurii, amenințări** la adresa organelor de căpitănie în exercițiul funcțiunii (dacă nu e infracțiune).',
          ],
        },
      ],
    },
    {
      title: '4. Infracțiuni contra siguranței navigației',
      blocks: [
        {
          type: 'list',
          title: 'Sunt infracțiuni',
          items: [
            '**Conducerea unei ambarcațiuni fără brevet / certificat corespunzător**; **încredințarea** conducerii unei persoane fără brevet (răspundere penală pentru conducător);',
            'exercitarea atribuțiilor **sub influența alcoolului** sau a altor substanțe interzise;',
            '**refuzul** de a se supune recoltării probelor biologice (alcoolemie) – pedeapsă mai mare, ca la ebrietate agravată;',
            '**părăsirea ambarcațiunii** de către conducător, în pericol, înainte de a-și fi făcut datoria pentru salvarea ei;',
            '**neacordarea asistenței și salvării** unei ambarcațiuni sau persoane în pericol;',
            'necomunicarea la abordaj a datelor de identificare a ambarcațiunii proprii;',
            'părăsirea postului sau a ambarcațiunii, fără aprobare, de un membru al echipajului sau pilot, când poate fi stânjenită navigația;',
            'schimbarea poziției, scoaterea din funcțiune, avarierea gravă sau distrugerea unui **semnal de navigație** costier sau plutitor;',
            'distrugerea / avarierea ambarcațiunii, încărcăturii, echipamentelor de navigație; **preluarea fără drept** a controlului ambarcațiunii; falsificarea unui ordin scris sau a jurnalului de bord / mașini; informații false;',
            '**refuzul** de a executa un ordin privind siguranța navigației (închisoare); stânjenirea atribuțiilor echipajului; neexecutarea ordinului conducătorului de către pasageri în timpul unui sinistru;',
            'arborarea fără drept a pavilionului român.',
          ],
        },
        {
          type: 'table',
          boldFirst: true,
          head: ['Alcoolemie', 'Valoare'],
          rows: [
            ['Considerat **sub influența alcoolului**', 'până la **0,80 g/l** alcool pur în sânge sau până la **0,40 mg/l** în aerul expirat'],
            ['**Ebrietate** = infracțiune', '**peste 0,80 g/l** în sânge sau **peste 0,40 mg/l** în aerul expirat'],
            ['Și la valori mai mici', 'dacă există **diminuarea evidentă** a echilibrului / mișcării, dificultăți de exprimare, incoerență (constatate clinic sau prin alte probe)'],
          ],
        },
        {
          type: 'list',
          items: [
            'Consecințe deosebit de grave sau **pagube materiale importante** = fapta e mai gravă, **pedeapsa crește**.',
            'Măsurile și cercetările la bordul ambarcațiunii se fac **în prezența căpităniei de port**.',
          ],
        },
      ],
    },
  ],
};

export default data;
