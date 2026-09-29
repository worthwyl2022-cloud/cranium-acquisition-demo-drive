plugins {
    id("com.android.application")
}

android {
    namespace = "com.worthwyl.cranium.commander"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.worthwyl.cranium.commander"
        minSdk = 24
        targetSdk = 36
        versionCode = 1
        versionName = "0.1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
        debug {
            isMinifyEnabled = false
        }
    }

    packaging {
        resources.excludes += "/META-INF/{AL2.0,LGPL2.1}"
    }

    tasks.register<Copy>("syncCommanderWeb") {
        from(rootProject.projectDir.parentFile.resolve("dist"))
        into(layout.projectDirectory.dir("src/main/assets/www"))
    }

    tasks.named("preBuild").configure {
        dependsOn("syncCommanderWeb")
    }
}

dependencies {
    implementation("androidx.webkit:webkit:1.17.1")
}
