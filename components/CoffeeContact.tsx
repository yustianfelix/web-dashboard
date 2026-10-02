"use client";

import React from "react";
import contactData from "../data/contact.json";
import locationData from "../data/location.json";
import type { ContactInfo, LocationInfo } from "@/types/dashboard";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Globe2,
  Coffee,
  UserCheck,
} from "lucide-react";

export default function CoffeeContact() {
  const contact: ContactInfo = contactData;
  const location: LocationInfo = locationData;

  return (
    <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faeedf] border border-[#eedcc8] text-[#92400e] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
          <UserCheck className="size-3 text-[#b45309]" />
          <span>Contact Person &bull; Roastery &amp; Flagship Hub</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1c100b]">
          Connect with Our Roastery Team
        </h2>
        <p className="text-sm sm:text-base text-[#5c3a27] mt-2 max-w-2xl">
          Direct communication with our master roaster for wholesale inquiries, custom bean roasting,
          or visiting our flagship tasting room.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Person Card */}
        <div className="p-7 rounded-3xl bg-white/95 border border-[#e8d7c6] shadow-[0_4px_24px_rgba(60,30,10,0.06)] flex flex-col justify-between hover:border-amber-500/60 transition-all">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="size-13 rounded-2xl bg-gradient-to-tr from-[#853f0e] via-[#a34b12] to-[#c2611a] text-white font-bold text-base flex items-center justify-center shadow-[0_2px_12px_rgba(180,83,9,0.3)]">
                  {contact.initials}
                </div>
                <span
                  className="absolute bottom-0 right-0 size-3.5 rounded-full bg-emerald-500 ring-2 ring-white"
                  title="On Barista Shift"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#1f1109]">{contact.name}</h3>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {contact.statusBadge || "On Barista Shift"}
                  </span>
                </div>
                <p className="text-xs text-[#7a4c30] font-medium">{contact.role}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#faf6f0] border border-[#eedcc8] flex items-center justify-between text-xs">
              <span className="text-[#6e4125] font-medium flex items-center gap-1.5">
                <Clock className="size-3.5 text-[#b45309]" />
                Response SLA:
              </span>
              <span className="font-bold text-[#1f1109]">{contact.responseTime || "~2 minutes"}</span>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3.5 text-xs text-[#4a2e1d] hover:text-[#1f1109] p-2.5 rounded-xl hover:bg-[#faf4ec] transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#faeedf] border border-[#eedcc8] text-[#92400e]">
                  <Mail className="size-4" />
                </div>
                <div className="truncate">
                  <p className="font-bold text-[#1f1109]">Email Master Roaster</p>
                  <p className="text-[#7a4c30] truncate">{contact.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3.5 text-xs text-[#4a2e1d] hover:text-[#1f1109] p-2.5 rounded-xl hover:bg-[#faf4ec] transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#faeedf] border border-[#eedcc8] text-[#92400e]">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="font-bold text-[#1f1109]">Priority Roastery Hotline</p>
                  <p className="text-[#7a4c30]">{contact.phone}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#eddccb]">
            <a
              href={`mailto:${contact.email}?subject=RoastCraft%20Coffee%20Inquiry`}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#853f0e] via-[#a34b12] to-[#c2611a] hover:from-[#78350f] hover:to-[#a34b12] shadow-[0_2px_14px_rgba(180,83,9,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <Mail className="size-3.5" />
              <span>Contact Head Roaster Budi</span>
            </a>
          </div>
        </div>

        {/* Flagship Roastery Location Card */}
        <div className="p-7 rounded-3xl bg-white/95 border border-[#e8d7c6] shadow-[0_4px_24px_rgba(60,30,10,0.06)] flex flex-col justify-between hover:border-amber-500/60 transition-all">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-13 rounded-2xl bg-[#faeedf] border border-[#eedcc8] text-[#92400e] flex items-center justify-center shadow-xs">
                <Coffee className="size-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#1f1109]">{location.title}</h3>
                  <span className="text-[10px] font-bold text-[#92400e] bg-[#faeedf] border border-[#eedcc8] px-2 py-0.5 rounded-full">
                    {location.status || "Brewing Live"}
                  </span>
                </div>
                <p className="text-xs text-[#7a4c30] font-medium">{location.subtitle}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#faf6f0] border border-[#eedcc8] flex items-center justify-between text-xs">
              <span className="text-[#6e4125] font-medium flex items-center gap-1.5">
                <Globe2 className="size-3.5 text-[#b45309]" />
                Timezone:
              </span>
              <span className="font-bold text-[#1f1109]">{location.timezone || "UTC+7 (Jakarta)"}</span>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3.5 text-[#4a2e1d]">
                <MapPin className="size-4 mt-0.5 text-[#b45309] shrink-0" />
                <p className="leading-relaxed font-medium">
                  {location.address.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < location.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex items-center gap-3.5 text-[#4a2e1d]">
                <Clock className="size-4 text-[#b45309] shrink-0" />
                <div>
                  <p className="font-bold text-[#1f1109]">Cafe Operating Schedule</p>
                  <p className="text-[#7a4c30] font-medium">{location.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#eddccb]">
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl font-bold text-xs text-[#853f0e] bg-[#faeedf] border border-[#eedcc8] hover:bg-[#f5e3cf] hover:text-[#451a03] transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <ExternalLink className="size-3.5" />
              <span>View Flagship Roastery on Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
