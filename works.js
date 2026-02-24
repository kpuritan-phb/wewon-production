const works = [
    // LANDSCAPE (16:9 가로형)
    {
        id: 1,
        title: "Brand Commercial",
        client: "Luxury Auto",
        category: "BRAND",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "A cinematic commercial highlighting the elegance and power of the new luxury sedan."
    },
    {
        id: 2,
        title: "MV: Midnight City",
        client: "Synth Echo",
        category: "MUSIC_VIDEO",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "An neon-lit exploration of the urban landscape through sound and light."
    },
    {
        id: 3,
        title: "Nature Documentary",
        client: "Green Planet",
        category: "DOCUMENTARY",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Capturing the silent majesty of the mountain ranges."
    },
    {
        id: 4,
        title: "Corporate Vision",
        client: "Tech Corp",
        category: "BRAND",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Defining the future of technology through powerful imagery."
    },
    {
        id: 7,
        title: "Architecture Study",
        client: "Design Studio",
        category: "OTHERS",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "A formal study of geometry and shadow in modern architecture."
    },
    {
        id: 8,
        title: "City Pulse",
        client: "Seoul Studio",
        category: "DOCUMENTARY",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "The relentless rhythm of the city captured frame by frame."
    },
    {
        id: 9,
        title: "Season Campaign",
        client: "Outdoor Brand",
        category: "BRAND",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Seasonal storytelling rooted in nature and movement."
    },
    {
        id: 10,
        title: "Live Concert Film",
        client: "Artist Collective",
        category: "MUSIC_VIDEO",
        orientation: "landscape",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Raw energy and light from a sold-out live performance."
    },

    // PORTRAIT (9:16 세로형)
    {
        id: 14,
        title: "TikTok: Creative Edit",
        client: "@1ndian2wins",
        category: "BRAND",
        orientation: "portrait",
        // TikTok oEmbed Thumbnail (Pre-calculated/Stored)
        thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/76378e9f50e14d87a9386c12560773f1?x-expires=1708866000&x-signature=sample",
        videoUrl: "https://www.tiktok.com/embed/v2/7600738854332665109",
        description: "Fast-paced vertical edit specifically designed for TikTok's visual language."
    },
    {
        id: 15,
        title: "Threads: Storytelling",
        client: "@1ndian2wins",
        category: "BRAND",
        orientation: "portrait",
        // Instagram/Threads fallback
        thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=450&h=800",
        videoUrl: "https://www.threads.net/t/DUCiAXOAWxT/embed",
        description: "Engaging and raw storytelling produced for the Threads platform."
    },
    {
        id: 16,
        title: "Instagram: Cinematic Reel",
        client: "@1ndian2wins",
        category: "FASHION",
        orientation: "portrait",
        // Instagram Thumbnail Fallback
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=450&h=800",
        videoUrl: "https://www.instagram.com/reel/DTfRhxVE6f9/embed",
        description: "A premium cinematic expression exploring style through Instagram Reels."
    },
    {
        id: 5,
        title: "Fashion Film: Noir",
        client: "Vogue Style",
        category: "FASHION",
        orientation: "portrait",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "High-contrast visuals showcasing the latest noir-inspired collection."
    },
    {
        id: 6,
        title: "Street Portrait",
        client: "W Magazine",
        category: "FASHION",
        orientation: "portrait",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Intimate portraits shot in the quiet corners of the city."
    },
    {
        id: 11,
        title: "Dance Reel",
        client: "Studio K",
        category: "OTHERS",
        orientation: "portrait",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Vertical storytelling through body and motion."
    },
    {
        id: 12,
        title: "Vertical Campaign",
        client: "Beauty Label",
        category: "BRAND",
        orientation: "portrait",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Made for mobile-first audiences with cinematic depth."
    },
    {
        id: 13,
        title: "Social Reel",
        client: "IG Brand",
        category: "BRAND",
        orientation: "portrait",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Short-form storytelling optimized for social feed."
    },
    {
        id: 17,
        title: "Maison de Onu: Party Pool",
        client: "Maison de Onu",
        category: "BRAND",
        orientation: "portrait",
        thumbnail: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=450&h=800",
        videoUrl: "https://www.instagram.com/reel/DTU3zQAkV14/embed",
        description: "광주 프리미엄 풀빌라 '메종드오누'. 청결하고 프라이빗한 파티풀 시설의 매력을 담은 감성 영상입니다."
    },
    {
        id: 18,
        title: "Obang Heater: Originality",
        client: "오방난로",
        category: "BRAND",
        orientation: "portrait",
        thumbnail: "https://images.unsplash.com/photo-1591197172071-36acd2517335?auto=format&fit=crop&q=80&w=450&h=800",
        videoUrl: "https://www.instagram.com/reel/DRwggvgk791/embed",
        description: "기술력에 대한 브랜드의 자신감. 세계 최초 상단 하이라이트 가열 구조를 가진 오방난로의 오리지널리티를 강조합니다."
    },
    {
        id: 19,
        title: "Mirabelle Korea: K-Solutions",
        client: "Mirabelle Korea",
        category: "BRAND",
        orientation: "portrait",
        thumbnail: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=450&h=800",
        videoUrl: "https://www.instagram.com/reel/DMdGy21PiTy/embed",
        description: "인도를 위한 K-솔루션. 다양한 기후와 피부 타입에 맞춘 현지화된 K-뷰티 스킨케어를 소개합니다."
    }
];

export default works;
