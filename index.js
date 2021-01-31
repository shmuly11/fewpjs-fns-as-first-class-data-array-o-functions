function wakeDog(dogName, dogBreed) {
    let activity = `Wake ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
  }

  function leashDog(dogName, dogBreed) {
    let activity = `Leash ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
  }

  function walkToPark(dogName, dogBreed) {
    let activity = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
  }

  function throwFrisbee(dogName, dogBreed) {
    let activity = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
  }

  function walkHome(dogName, dogBreed) {
    let activity = `Walk home with ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
  }

  function unleashDog(dogName, dogBreed) {
    let activity = `Unleash ${dogName} the ${dogBreed}`
    console.log(activity);
    return activity
  }

  let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
  ]

  function exerciseDog(dogName, dogBreed){
      let result = []
      for(let i = 0; i < routine.length; i++){
          result.push(routine[i](dogName, dogBreed))
      }
      return result
  }