export const Zadaci = [
  {
    zadatakID: "1",
    imeZadatka: "Paran ili neparan",
    tekstZadatka:
      "Napiši program koji ispituje da li je broj paran ili neparan",
    usloviZadatka: "Zabranjeno koristiti % za testiranje parnosti",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      { ulaz: "12", izlaz: "Paran" },
      { ulaz: "-1", izlaz: "Neparan" },
      { ulaz: "12412", izlaz: "Paran" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "1", izlaz: "Neparan" },
      { ulaz: "5", izlaz: "Neparan" },
      { ulaz: "-4", izlaz: "Paran" },
    ],
  },
  {
    zadatakID: "6",
    imeZadatka: "Hello World",
    tekstZadatka: "Napiši program koji ispisuje poruku Hello World!",
    usloviZadatka: "U kodu mora biti komentar FIT-Mostar",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
    testPrimjeri: [
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
    ],
  },
  {
    zadatakID: "2",
    imeZadatka: "Najveći broj",
    tekstZadatka:
      "Napiši program koji traži od korisnika unos 3 broja i ispisuje najveći broj",
    usloviZadatka: "Zabranjeno koristiti funkciju max()",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      { ulaz: "12 23 33", izlaz: "33" },
      { ulaz: "-1 -123 -124", izlaz: "-1" },
      { ulaz: "0 0 0", izlaz: "0" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "1 2 3", izlaz: "3" },
      { ulaz: "5 5 5", izlaz: "5" },
      { ulaz: "5.51 5.50 5", izlaz: "5.51" },
    ],
  },
  {
    zadatakID: "3",
    imeZadatka: "Fibonacci",
    tekstZadatka:
      "Napiši program koji traži od korisnika unos broja n, zatim ispisuje n-ti Fibonaccijev broj",
    usloviZadatka:
      "Mora se koristiti rekurzija\nUkoliko se desio overflow nad intom vratiti '0'",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "nevidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-07-11T00:00",
    testPrimjeri: [
      { ulaz: "1", izlaz: "1" },
      { ulaz: "0", izlaz: "1" },
      { ulaz: "9", izlaz: "55" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "70", izlaz: "0" },
      { ulaz: "2", izlaz: "2" },
      { ulaz: "42", izlaz: "433494437" },
    ],
  },
  {
    zadatakID: "4",
    imeZadatka: "Procenat prostih",
    tekstZadatka: `Tražiti od korisnika da u niz spremi 100 nasumičnih brojeva od 1-100000 koji imaju nepran broj cifara, te ispisati koliko je procenat generisanja prostih brojeva`,
    usloviZadatka:
      "Mora postojati logika koja omogućuje ponavljanje generisanja brojeva sve dok nemaju neparan broj cifara",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      {
        ulaz: "",
        izlaz: "",
      },
      {
        ulaz: "",
        izlaz: "",
      },
      {
        ulaz: "",
        izlaz: "",
      },
    ],
    skriveniTestPrimjeri: [
      {
        ulaz: ".",
        izlaz: ".",
      },
      {
        ulaz: ".",
        izlaz: ".",
      },
      {
        ulaz: ".",
        izlaz: ".",
      },
    ],
  },
  {
    zadatakID: "5",
    imeZadatka: "Duplikati",
    tekstZadatka:
      "U nizu od n elemenata ispisati brojeve koji se dupliraju, korisnik unosi broj n, zatim n brojeva nakon čega se ispisuju brojevi koji se ponavljaju više od jednog puta",
    usloviZadatka: "Vremenska složenost mora biti manja od O(n*n)",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      {
        ulaz: "5 22 9 123 9 4",
        izlaz: `9`,
      },
      {
        ulaz: "7 1 0 2 4 5 0 1 1",
        izlaz: `0 1`,
      },
      {
        ulaz: "10 10 20 30 40 -50 -10 -50 100 80 50",
        izlaz: `-50 10`,
      },
    ],
    skriveniTestPrimjeri: [
      {
        ulaz: "0",
        izlaz: "",
      },
      {
        ulaz: "10 10 20 30 40 -50 -10 -50 100 80 50",
        izlaz: "-50 10",
      },
      {
        ulaz: "10 10 20 30 40 -50 -10 -50 100 80 50",
        izlaz: `-50 10`,
      },
    ],
  },
];
export const odabraniZadatak = Zadaci[0];
/*

#include<iostream>
#include<ctime>
using namespace std;

bool prost(int a)
{
	for (int i = 2; i <= a / 2; i++)
		if (a % i == 0)return false;
	return true;
}
int bc(int a)
{
	int z = 0;
	while (a) { a /= 10; z++; };
	return z;
}
int main()
{
	srand(time(NULL));
	int niz[100];
	for (int i = 0; i < 100; i++)
	{
		int temp;
		do {
			temp = rand() % 100000 + 1;
		} while (bc(temp)%2==0);
		niz[i] = temp;
	}
	int brojac = 0;
	for (int i = 0; i < 100; i++)
		if(prost(niz[i]))
		brojac++;
	cout << "Procenat prostih: " <<  (float)(brojac/100.0) <<"%"<< endl;
	return 0;
}


*/
