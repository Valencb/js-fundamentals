
const expect = require ('chai').expect
const platzom = require ('..').default


describe('#platzom', function (){
  it ('If the words end with "ar", it is to be removed.', function () {
    const translation = platzom ("programar")
    expect (translation).to.equal("program")
  })
  it ('If the words start with "z", add "pe" at the end.', function(){
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")
		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})
  it ('If the translated words  have 10 o more letters, the words should be splitted in half and to be joined with a "-"', function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})

  it ('If the words end with "ar", it is to be removed.', function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})
