#include<bits/stdc++.h>
#include<conio.h>
using namespace std;
	
int main(){
	srand((unsigned) time(NULL));
	int n = (rand() % 1000) + 1;
	cout<<"Lets's Guess The Number.\nYou have 10 chances.\nThe Games will end when you guess correct.\n";
	cout<<"Every possibility number is between 1 - 1000.\n";
	cout<<"Everytime you have a wrong guess. It's will tell you Too Low or Too High.\nAfter 10 guessing times. the key will reduce by half\n";
	int l = 1, r = 1000, times = 10, len = 32;
	string key = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
	while(1){
		int x;
		cout<<"Enter your Number : "; cin>>x;
		if(n == x){
			cout<<"Correct!\n";
			cout<<"Key : "<<key.substr(0,len)<<"\n";
			getch();
			return 0;
		}else if(n > x){
			cout<<"Too Low\n";
			times -= 1;
		}else if(n < x){
			cout<<"Too High\n";
			times -= 1;
		}
		times = max(times,0);
		if(times == 0) len = max(0,len/2);
		cout<<"you have "<<times<<" guess(s) left.\n";
	}
	cout<<"Answer is "<<n<<"\n";
	cout<<"Press any key to continue . . . ";
	getch();
	return 0;
}
