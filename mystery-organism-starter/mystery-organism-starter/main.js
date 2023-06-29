// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(organismNum, dna){
  return {
    specimenNum:organismNum,
    dna:dna,
    mutate:function(){
      let randomIndex = Math.floor(Math.random() * 15);
      let randomBase = returnRandBase();
      while(this.dna[randomIndex] === randomBase){
        randomBase = returnRandBase();
      }

      this.dna[randomIndex] = randomBase;

      return this.dna;
    },
    compareDNA:function(other){
      let count = 0;
      for (let index = 0; index < other.dna.length; index++) {
        if(other.dna[index] === this.dna[index]){
          count++;
        }
        
      }

      console.log(`specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${(count/15)*100}% in common`);
    },
    willLikelySurvive:function(){
      let count = 0;
      for (const iterator of this.dna) {
        if (iterator === 'C' || iterator === 'G') {
          count++;
        }
      }

      if ((count/this.dna.length)>=0.6) {
        return true;
      } else {
        return false;
      }
    }
  };
}

let paequorInstances = [];

for (let index = 0; index < 30; index++) {
  paequorInstances.push(new pAequorFactory(index+1, mockUpStrand()));
  
}


console.log(paequorInstances);