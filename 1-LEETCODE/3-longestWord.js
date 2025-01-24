const longestWord= (str)=>{
    
    str=str+" ";
    
    let maxDiff=0;
    let pointer=0;
    let maxPointer=1;
    
    for(let i=1;i<=str.length;i++)
    {
        if(str[i]===' ')
        {
            
            if(i-pointer>maxDiff)
            {
                maxDiff= i-pointer;
                maxPointer= pointer;
            }
            
            pointer=i+1;
        }
    }
    
    let strr="";
    
    for(let i=maxPointer;i<=maxPointer+maxDiff-1;i++)
    {
        strr=strr+str[i];
    }
    
    console.log(strr);
}

longestWord("Find the longest word in this");