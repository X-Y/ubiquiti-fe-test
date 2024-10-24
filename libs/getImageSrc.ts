function getImageSrc(id: string, imgCode: string, size:string) {
  const url = `https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerpri
  nt%2Fui%2Fimages%2F${id}%2Fdefault%2${imgCode}.png&w=${size}&
  q=75`
  return url;
}

export default getImageSrc;