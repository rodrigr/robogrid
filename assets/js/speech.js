let grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const speechRecogn = new webkitSpeechRecognition() || new SpeechRecognition()
const speechRecognList = new webkitSpeechGrammarList() || new SpeechGrammarList
speechRecognList.addFromString(grammar, 1);
speechRecogn.grammars = speechRecognList
speechRecogn.continuous = false
speechRecogn.lang = 'en-US'
speechRecogn.interimResults = false;
speechRecogn.maxAlternatives = 1;



const synth = window.speechSynthesis


