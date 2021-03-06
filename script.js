var nFnF = null;
var correctNote = null;
var NfNf = null;
var numRight = 0;
var numTimesGuessed = 0;
function playAudio(filePath, buttonID, numSeconds)
{
	var octNum = document.getElementById('octNum').value;
	var audio = new Audio("Notes/" + filePath + octNum.toString() +  ".wav");
	audio.play();
	pauseButton(buttonID, numSeconds);
}
function playAudioElse(filePath, buttonID, numSeconds)
{
	var audio = new Audio("Notes/" + filePath +  ".wav");
	audio.play();
	pauseButton(buttonID, numSeconds);
}
function pauseButton(buttonID, numSeconds)
{
	document.getElementById(buttonID).disabled = true;
	setTimeout(function(){document.getElementById(buttonID).disabled = false;}, (numSeconds*1000));
}
function training()
{
	var octaveNumber = (getRandomInteger(1,6)).toString();
	var note = getRandomInteger(1,12);
	var noteFileNameFinal;
	var noteFileName1;
	if(note == 1)
	{
		note = "C";
		noteFileName1 = "c";
	}
	else
	{
		if(note == 2)
		{
			note = "C#/Db";
			noteFileName1 = "csdb";
		}
		else
		{
			if(note == 3)
			{
				note = "D";
				noteFileName1 = "d";
			}
			else
			{
				if(note == 4)
				{
					note = "D#/Eb";
					noteFileName1 = "dseb";
				}
				else
				{
					if(note == 5)
					{
						note = "E";
						noteFileName1 = "e";
					}
					else
					{
						if(note == 6)
						{
							note = "F";
							noteFileName1 = "f";
						}
						else
						{
							if(note == 7)
							{
								note = "F#/Gb";
								noteFileName1 = "fsgb";
							}
							else
							{
								if(note == 8)
								{
									note = "G";
									noteFileName1 = "g";
								}
								else
								{
									if(note == 9)
									{
										note = "G#/Ab";
										noteFileName1 = "gsab";
									}
									else
									{
										if(note == 10)
										{
											note = "A";
											noteFileName1 = "a";
										}
										else
										{
											if(note == 11)
											{
												note = "A#/Bb";
												noteFileName1 = "asbb";
											}
											else
											{
												if(note == 12)
												{
													note = "B";
													noteFileName1 = "b";
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	noteFileNameFinal = noteFileName1 + octaveNumber;
	NfNf = noteFileNameFinal;

	document.getElementById("noteName").innerHTML = note;
	document.getElementById("noteOctave").innerHTML = octaveNumber;

	document.getElementById("trainButtonHear").disabled = true;
	setTimeout(function(){document.getElementById("trainButtonHear").disabled = false;}, (1*1000));

	playAudioElse(noteFileNameFinal, "trainButton", 1);
}

function test()
{
	document.getElementById("rightwrong").innerHTML = "";
	var octaveNumber = (getRandomInteger(1,6)).toString();
	var note = getRandomInteger(1,12);
	var noteFileNameFinal;
	var noteFileName1;
	if(note == 1)
	{
		correctNote = "C";
		noteFileName1 = "c";
	}
	else
	{
		if(note == 2)
		{
			correctNote = "C#/Db";
			noteFileName1 = "csdb";
		}
		else
		{
			if(note == 3)
			{
				correctNote = "D";
				noteFileName1 = "d";
			}
			else
			{
				if(note == 4)
				{
					correctNote = "D#/Eb";
					noteFileName1 = "dseb";
				}
				else
				{
					if(note == 5)
					{
						correctNote = "E";
						noteFileName1 = "e";
					}
					else
					{
						if(note == 6)
						{
							correctNote = "F";
							noteFileName1 = "f";
						}
						else
						{
							if(note == 7)
							{
								correctNote = "F#/Gb";
								noteFileName1 = "fsgb";
							}
							else
							{
								if(note == 8)
								{
									correctNote = "G";
									noteFileName1 = "g";
								}
								else
								{
									if(note == 9)
									{
										correctNote = "G#/Ab";
										noteFileName1 = "gsab";
									}
									else
									{
										if(note == 10)
										{
											correctNote = "A";
											noteFileName1 = "a";
										}
										else
										{
											if(note == 11)
											{
												correctNote = "A#/Bb";
												noteFileName1 = "asbb";
											}
											else
											{
												if(note == 12)
												{
													correctNote = "B";
													noteFileName1 = "b";
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	noteFileNameFinal = noteFileName1 + octaveNumber;
	nFnF = noteFileNameFinal;

	playAudioElse(noteFileNameFinal, "buttonTest", 1);
	
	document.getElementById("stat").innerHTML = "Now Playing", document.getElementById("buttonTest").disabled = true, document.getElementById("buttonTestHear").disabled = true;
	setTimeout(function(){document.getElementById("stat").innerHTML = "Not Playing", document.getElementById("buttonTest").disabled = false, document.getElementById("buttonTestHear").disabled = false;}, (1*1000));
}

function submitNote(note)
{
	if(!correctNote || correctNote == null)
	{
		return;
	}
	else
	{
		if(note == correctNote)
		{
			numRight++;
			numTimesGuessed++;
			document.getElementById("rightwrong").innerHTML = "Correct!";
			document.getElementById("buttonTest").disabled = true;
			document.getElementById("buttonTestHear").disabled = true;
			setTimeout(function(){document.getElementById("buttonTestHear").disabled = false, document.getElementById("buttonTest").disabled = false;} (1*1000));
			test();
		}
		else
		{
			numTimesGuessed++;
			document.getElementById("rightwrong").innerHTML = "Incorrect!";
			document.getElementById("buttonTest").disabled = true;
			document.getElementById("buttonTestHear").disabled = true;
			setTimeout(function(){document.getElementById("buttonTestHear").disabled = false, document.getElementById("buttonTest").disabled = false;} (1*1000));
		}

		document.getElementById("score").innerHTML = numRight + " / " + numTimesGuessed;
	}
	
}

function hearAgain()
{
	if(!nFnF || nFnF == null)
	{
		return;
	}
	else
	{
		playAudioElse(nFnF, "buttonTestHear", 1);
		document.getElementById("stat").innerHTML = "Now Playing", document.getElementById("buttonTestHear").disabled = true, document.getElementById("buttonTest").disabled = true;
		setTimeout(function(){document.getElementById("stat").innerHTML = "Not Playing", document.getElementById("buttonTestHear").disabled = false, document.getElementById("buttonTest").disabled = false;}, (1*1000));
	}
}

function hearAgainTraining()
{
	if(!NfNf || NfNf == null)
	{
		return;
	}
	else
	{
		playAudioElse(NfNf, "trainButtonHear", 1);
		document.getElementById("trainButton").disabled = true, document.getElementById("trainButtonHear").disabled = true;
		setTimeout(function(){document.getElementById("trainButton").disabled = false, document.getElementById("trainButtonHear").disabled = false;}, (1*1000));
	}
}