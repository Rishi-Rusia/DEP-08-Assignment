
const maxVowel= (sentence)=>{
    sentence=" "+sentence;
    
    let pointer=0;
    let maxpointer=0;
    let maxvowel=0;
    let counter=0;
    
    for(let i=0;i<sentence.length;i++)
    {
        if(sentence[i]===' ')
        {
            counter=0;
            pointer=i;
        }
        
        if(sentence[i]==='a'||sentence[i]==='e'||sentence[i]==='i'||sentence[i]==='o'||sentence[i]==='u')
        {
            counter++;
        }
        
        if(counter>maxvowel)
        {
            maxvowel=counter;
            maxpointer=pointer;
        }
    }
    
    let i=maxpointer+1;
    
    sentence=sentence+" ";
    
    let finalword="";
    
    while(sentence[i]!==' ')
    {
        finalword=finalword+sentence[i];
        i++;
    }
    
    console.log(finalword);
}

maxVowel("which word has the most vowels");
