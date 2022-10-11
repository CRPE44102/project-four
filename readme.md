# Project Four

Okay, folkens, nu skal I lige følge med. Det er utrolig vigtigt, at I bruger den nedenstående linje kode, uden at ændre noget som helst. Den skal kopieres ind i jeres terminal, som jeg har vist jer tidligere og så skal I lade være med at pille mere ved det.

Og det skal selvfølgelig gøres før I begynder at kode - hver gang.

    npx tailwindcss -i ./src/styles/base.css -o ./src/styles/main.css --watch


## Hvordan man bruger Git

Det er rigtig vigtigt, at I gør følgende, før I begynder at kode.

Check om jeres lokale kopi er "up-to-date" med den kopi der ligger på GitHub:
    
    git status

Hvis den siger, at I er bag ud, så indtast:

    git pull

Hver gang I har lavet en ændring, der kan tælle som *en helhed*, uanset hvor lille den måtte være, så indtast:

    git add .

Øjeblikkeligt efterfulgt af denne:

    git commit -m "indsæt en besked her, mellem de to citations tegn, der beskriver hvad I har gjort"

*Note:* Beskeden skal helst være på Engelsk og som en "kommando", f.eks. **"change header to a lighter color"** eller **"add header to call screen"**.

Når I så er færdige med jeres kode session, så indtaster I til aller sidst:

    git push

Og voila! Det er det eneste I behøver at tænke på. Vi gider ikke lige at arbejde med branching, da det er for besværligt på jeres nuværende niveau. *Held og lykke!* (: