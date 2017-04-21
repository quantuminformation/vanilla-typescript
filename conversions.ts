export namespace conversions {

  function formdataToObject (formData) {
    const o = {}
    for (let pair of formData.entries()) {
      o[pair[0]] = pair[1]
      console.log(pair)
    }
    return o
  }

}
