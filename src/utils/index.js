/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
// Import

// Trie SearchInputResult.
export function compareTitle(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  }
  else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}


export function compareRating(a, b) {
  const ratingA = a.rating.toUpperCase();
  const ratingB = b.rating.toUpperCase();

  let comparison = 0;
  if (ratingA > ratingB) {
    comparison = 1;
  }
  else if (ratingA < ratingB) {
    comparison = -1;
  }
  return comparison;
}

export function compareReleaseDate(a, b) {
  const releaseDateA = a.premiered.toUpperCase();
  const releaseDateB = b.premiered.toUpperCase();

  let comparison = 0;
  if (releaseDateA > releaseDateB) {
    comparison = 1;
  }
  else if (releaseDateA < releaseDateB) {
    comparison = -1;
  }
  return comparison;
}

export function compareLanguage(a, b) {
  const languageA = a.language.toUpperCase();
  const languageB = b.language.toUpperCase();

  let comparison = 0;
  if (languageA > languageB) {
    comparison = 1;
  }
  else if (languageA < languageB) {
    comparison = -1;
  }
  return comparison;
}

// For LandingPage--Aired: Pour filtrer le nombre de résultat d'un tableau par langue et par note.
// Avoir que 8 resultats, 4 langues US et 4 langue JP avec les meilleures notes.
export function FilteredAiredLandingPage(airedArray) {
  const jpShow = airedArray.filter((currentShow) => currentShow.Show_type === 'Animation').splice(0, 4);
  // .sort(compareRating);

  const usShow = airedArray.filter((currentShow) => currentShow.Show_type === 'Scripted').splice(0, 4);
  // .sort(compareRating);

  const newArray = [jpShow, usShow];

  return newArray;
}


export function showStatusSwitch(showDetailStatus) {
  switch (showDetailStatus) {
    case 0: return 'In development';
    case 1: return 'Running';
    case 2: return 'Ended';
    default: return 'Not specified';
  }
}

export function displayCardActionButtons(event) {
  event.persist();
  const parentIconElement = event.target.parentElement.parentElement;
  const hiddenIcons = parentIconElement.getElementsByClassName('hiddenCardIcon');
  for (let i = 0; i < hiddenIcons.length; i++) {
    hiddenIcons[i].style.display = 'block';
    hiddenIcons[i].classList.add('scale-up-center');
  }
  const currentCard = document.querySelectorAll('#currentCard');
  for (let i = 0; i < currentCard.length; i++) {
    currentCard[i].addEventListener('mouseleave', () => {
      for (let index = 0; index < hiddenIcons.length; index++) {
        hiddenIcons[index].style.display = 'none';
      }
    });
  }
}
