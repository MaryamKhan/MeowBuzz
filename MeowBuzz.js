for (var counter=0; counter<50; counter++){
  if (counter % 5 == 0 && counter % 3 == 0)
    console.log("MeowBuzz");
  else if (counter % 5 == 0)
    console.log("Meow");
  else if (counter % 3 == 0)
    console.log("Buzz");
  else
    console.log(counter);
}
