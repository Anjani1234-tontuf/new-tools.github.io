// Create an empty global object
const spacem = {};

// array of words you'd like generated into random sentences
spacem.words = [
    'moon','star','international space station','saturn V rocket','apollo','mission','rover','bot','black hole','galaxy','milky way','mercury','venus','earth','mars','jupiter','saturn','uranus','neptune','pluto','planet','comet','asteroid','constellation','celestial','sun','solar system','gemini','mercury 7','satellite','sputnik','voyager','insight','curiosity','juno','cassini-huygens','hubble space telescope','viking 1','orbit','astronaut','astronomy','dwarf planet','supernova','cosmos','crater','lunar','eclipse','umbra','universe','solar','exoplanet','earthbound','flare','falling star','dwarf star','dark matter','cosmonaut','corona','gibbous moon','hypernova','interstellar','lunar','meteor','meteor shower','minor planet','NASA','nova','neutron star','pulsar','red drawf','sky','solstice','sunspot','terrestial','totality','wormhole', 'andromeda','antlia','apus','aquarius','aquila','ara','aries','auriga','boötes','caelum','camelopardalis','cancer','canes venatici','canis major','canis minor','capricornus','carina','cassiopeia','centaurus','cepheus','cetus','chamaeleon','circinus','columba','coma berenices','corona austrina','corona borealis','corvus','crater','crux','cygnus','delphinus','dorado','draco','equuleus','eridanus','fornax','gemini','grus','hercules','horologium','hydra','hydrus','indus','lacerta','leo','leo minor','lepus','libra','lupus','lynx','lyra','mensa','microscopium','monoceros','musca','norma','octans','ophiuchus','orion','pavo','pegasus','perseus','phoenix','pictor','pisces','piscis austrinus','puppis','pyxis','reticulum','sagitta','sagittarius','scorpius','sculptor','scutum','serpens','sextans','taurus','telescopium','triangulum','triangulum australe','tucana','ursa major','ursa minor','vela','virgo','volans','vulpecula'
];

// Create an empty array where you'd like to push generated sentences
const paragraph = ['Spacem ipsum '];
const generatedText = [];

// Randomize content so that new words and phrases are generated each time
// Take words and phrases from spacem.words and compile them to create sentences
// randomize phrases and add punctuation to each sentence.
function sentenceBuild() {
	spacem.words.sort(function () {
		return 0.1 - Math.random();
    });
    
	let sentences = spacem.words.slice(0, 6).join(' ') + '. ';
    sentences = sentences.charAt(0).toUpperCase() + sentences.slice(1);
    paragraph.push(sentences);
};

function paragraphSize(size, number) {
	var small = size * number - 1;
	for (var i = 1; i <= small; i++) {
		sentenceBuild();
	}
	var i = void 0,
	    j = void 0,
	    container = void 0;
	for (var i2 = 0, j = paragraph.length; i2 < j; i2 += size) {
		container = paragraph.slice(i2, i2 + size).join('');
		generatedText.push(container);
	}
}

$(function(){
    // On submit, remove class of '.hidden' to reveal generated text (fades in)
    $('form').submit(function (e) {
		e.preventDefault();
        const number = parseInt($('select#paraNumber option:selected').val());
        
		const size = parseInt($('input[name=paraSize]:checked').val()) / 3;
        
		$('.result').css('display', 'block');
        $('form').fadeOut();
        paragraphSize(size, number);
		for (var item in generatedText) {
			$('#generated').append(`<p> ${generatedText[item]} </p>`);
		}

        // User clicks on button to clear existing text and choose again, generate text fades out
        $('.refresh').on('click', function () {
            location.reload(true);
        });

    });
});







