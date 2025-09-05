import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactSection from "@/components/contact"
import { ArrowRight, Star, Users, Award, Zap, Shield, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-slate-800">NDBScreative</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">
                Beranda
              </Link>
              <Link href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Layanan
              </Link>
              <Link href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                Tentang
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                Kontak
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="#contact">Mulai Sekarang</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">🚀 Solusi Digital Kreatif</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Transformasi Kehadiran Digital Anda
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Kami menciptakan website yang menakjubkan, aplikasi yang powerful, dan pengalaman brand yang memorable
                  untuk mendorong hasil bisnis Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <a href="#contact">Mulai Proyek Anda</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  Lihat Karya Kami
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-slate-600">50+ Klien Puas</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-600 ml-2">5.0 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto lg:ml-16 lg:pl-16">
  <div className="relative z-10">
    <Image
      src="/Dashboard.jpg?height=600&width=600"
      alt="Workspace Pengembangan Web Modern"
      width={600}
      height={600}
      className="rounded-2xl shadow-2xl"
    />
  </div>
  <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
  <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
</div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">Layanan Kami</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">Keahlian Terbaik Kami</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dari konsep hingga peluncuran, kami menyediakan solusi digital komprehensif yang disesuaikan dengan
              kebutuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Pengembangan Website</h3>
                <p className="text-slate-600 mb-6">
                  Website dan aplikasi web kustom yang dibangun dengan teknologi modern untuk performa optimal.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Desain UI/UX</h3>
                <p className="text-slate-600 mb-6">
                  Desain yang indah dan intuitif yang memberikan pengalaman pengguna luar biasa di semua perangkat.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Identitas Brand</h3>
                <p className="text-slate-600 mb-6">
                  Solusi branding lengkap termasuk logo, skema warna, dan panduan brand.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Marketing</h3>
                <p className="text-slate-600 mb-6">
                  Kampanye marketing strategis untuk meningkatkan kehadiran online dan mendorong konversi.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Optimasi SEO</h3>
                <p className="text-slate-600 mb-6">
                  Tingkatkan peringkat pencarian dan visibilitas dengan strategi SEO terbukti kami.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Maintenance & Support</h3>
                <p className="text-slate-600 mb-6">
                  Dukungan dan maintenance berkelanjutan untuk menjaga aset digital Anda berjalan lancar.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700">Karya Kami</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">Proyek Terbaru</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Lihat beberapa karya terbaru kami dan bagaimana kami membantu bisnis mentransformasi kehadiran digital
              mereka.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/e-commerce.jpg?height=300&width=400"
                  alt="E-commerce Website Project"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-lg">E-commerce Platform</h4>
                  <p className="text-sm">Pengembangan Website • Desain UI/UX</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/designapp.jpg?height=300&width=400"
                  alt="Mobile App Design Project"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-lg">Mobile App Design</h4>
                  <p className="text-sm">Desain UI/UX • Prototype</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/designlogo.jpg?height=300&width=400"
                  alt="Brand Identity Project"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-lg">Brand Identity</h4>
                  <p className="text-sm">Logo Design • Brand Guidelines</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/web.jpg?height=300&width=400"
                  alt="Web Development Project"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-lg">Web Application</h4>
                  <p className="text-sm">Full Stack Development • React</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/digitalmarket.jpg?height=300&width=400"
                  alt="Digital Marketing Project"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-lg">Marketing Dashboard</h4>
                  <p className="text-sm">Digital Marketing • Analytics</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/gradis.jpg?height=300&width=400"
                  alt="Graphic Design Project"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-lg">Graphic Design</h4>
                  <p className="text-sm">Visual Design • Creative Assets</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
              Lihat Semua Proyek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ContactSection />


      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold">NDBScreative</span>
              </div>
              <p className="text-slate-400">
                Menciptakan pengalaman digital luar biasa yang menghasilkan hasil untuk bisnis di seluruh dunia.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <span>📷</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <span>💼</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pengembangan Website
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desain UI/UX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Identitas Brand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Optimasi SEO
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tim Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-slate-400 mb-4">
                Berlangganan untuk mendapatkan update proyek terbaru dan insight kami.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Berlangganan
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400">© {new Date().getFullYear()} NDBScreative. Semua hak dilindungi.</p>
              <div className="flex space-x-6 text-slate-400">
                <Link href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Syarat Layanan
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Kebijakan Cookie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
