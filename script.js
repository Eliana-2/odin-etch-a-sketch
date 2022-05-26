function setSquares(squaresPerSide)
{
  const content = document.querySelector(`#content`);
  for(i = 0; i < squaresPerSide; i++)
  {
    const rowDiv = document.createElement(`div`);
    for(j = 0; j < squaresPerSide; j++)
    {
      const squareDiv = document.createElement(`div`);
      rowDiv.appendChild(squareDiv);
    }
    content.appendChild(rowDiv);
  }
}

const sizeButton = document.querySelector(`#size-button`);
sizeButton.addEventListener(`click`, () => {
  squaresPerSide = -1;
  do {
    squaresPerSide = +prompt(`How many squares per side?`)
  } while (squaresPerSide > 100 || squaresPerSide < 0);

  setSquares(squaresPerSide);
})
