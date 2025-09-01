import QRCode from 'qrcode'

// Générer le QR code pour le portfolio
const generateQRCode = async () => {
  try {
    const url = 'https://ton-portfolio-url.com' // Remplace par l'URL de ton portfolio
    const qrCodeDataURL = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })
    return qrCodeDataURL
  } catch (err) {
    console.error('Erreur génération QR code:', err)
    return null
  }
}

// Fonction pour télécharger le QR code
const downloadQRCode = async () => {
  const qrCodeDataURL = await generateQRCode()
  if (qrCodeDataURL) {
    const link = document.createElement('a')
    link.href = qrCodeDataURL
    link.download = 'portfolio-qr-code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export default function QRCodeGenerator(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Générer QR Code Portfolio</h2>
      <div className="bg-white/5 rounded-xl border border-white/10 p-6">
        <p className="text-slate-300 mb-4">
          Cliquez sur le bouton pour générer et télécharger un QR code qui renvoie vers votre portfolio.
        </p>
        <button 
          onClick={downloadQRCode}
          className="rounded-md bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 font-medium transition"
        >
          Générer QR Code
        </button>
      </div>
    </div>
  )
} 