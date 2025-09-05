"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.firstName.trim()) {
      alert("Nama depan wajib diisi")
      return
    }
    if (!form.email.trim() || !validateEmail(form.email)) {
      alert("Email tidak valid")
      return
    }
    if (!form.message.trim()) {
      alert("Pesan wajib diisi")
      return
    }

    const nomor = "6281352610218" // nomor WA (tanpa +)
    const text = `Halo, saya ${form.firstName} ${form.lastName}.
Email: ${form.email}
Jenis Proyek: ${form.projectType}
Pesan: ${form.message}`

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-orange-100 text-orange-700">Hubungi Kami</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mari diskusikan ide Anda dan ciptakan sesuatu yang luar biasa bersama. Kami di
            sini untuk membantu mewujudkan visi Anda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Info Kontak */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">Mari Bicara</h3>
                      <p className="text-slate-600 mb-6">
                        Punya proyek dalam pikiran? Kami ingin mendengarnya. Kirim pesan dan
                        kami akan membalas dalam 24 jam.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600">📧</span>
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">Email</div>
                          <div className="text-slate-600">fikronajiah123@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600">📱</span>
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">Phone</div>
                          <div className="text-slate-600">+62-8135 2610 218</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="text-purple-600">📍</span>
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">Location</div>
                          <div className="text-slate-600">Mataram, Indonesia</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Input */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nama Depan
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Masfiq"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nama Belakang
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Najiah"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="masfiq@contoh.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Jenis Proyek
                      </label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pilih Jenis Proyek</option>
                        <option>Pengembangan Website</option>
                        <option>Desain UI/UX</option>
                        <option>Identitas Brand</option>
                        <option>Digital Marketing</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ceritakan tentang proyek Anda..."
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      size="lg"
                    >
                      Kirim Pesan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
